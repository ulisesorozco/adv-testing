import * as React from 'react'
import { Alert, View, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RNCamera } from 'react-native-camera'
import { inject, observer } from 'mobx-react'
import { equals, isEmpty } from 'ramda'
import DocumentScanner from 'react-native-document-scanner'
import Student from './scan-screen.student'
import { ScanStore } from '../../../models/scan-store'
import { ExamStore } from '../../../models/exam-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { metrics } from '../../theme'
import * as screenStyles from './scan-screen.styles'

export interface ScanScreenProps extends NavigationScreenProps<{}> {
  scanStore: ScanStore
  examStore: ExamStore
}
export interface ScanScreenState {
  image: any
  initialImage: any
  rectangleCoordinates: any
  stableCounter: number
  lastDetectionType: any
  process: string
  leftCode: string
  centerCode: string
  pageNumber: number
}

@inject('scanStore')
@inject('examStore')
@observer
export class ScanScreen extends React.Component<ScanScreenProps, ScanScreenState> {
  camera: any
  scanner: any

  constructor(props) {
    super(props)
    this.state = {
      image: '',
      initialImage: '',
      rectangleCoordinates: '',
      stableCounter: 0,
      lastDetectionType: '',
      process: 'BarCode', // BarCode, BubbleSheet
      leftCode: '',
      centerCode: '',
      pageNumber: 1,
    }
  }

  removeAllStudents = () => {
    const { students } = this.props.scanStore
    students.forEach(student => {
      this.onRemoveStudent(student.id)
    })
    this.setState({ pageNumber: 1 })
  }

  clear = ok => {
    if (ok) {
      this.setState({
        process: 'BarCode',
        leftCode: '',
        centerCode: '',
      })
    } else {
      this.setState({ process: 'BubbleSheet' })
    }
  }

  done = () => {
    let done = true
    const { students } = this.props.scanStore

    if (students.length == 0) done = false
    students.forEach(student => {
      if (student.pages < student.page_num) {
        done = false
      }
    })
    if (done) {
      this.props.navigation.navigate('scoringTest')
    }
  }

  onBarCodeRead = e => {
    const { leftCode, centerCode } = this.state

    if (e.data.indexOf('Pages') > -1) {
      this.setState({ leftCode: e.data })
      if (!isEmpty(centerCode)) {
        setTimeout(() => {
          this.setState({ process: 'BubbleSheet' })
        }, 500)
      }
    } else if (e.data.indexOf('AT') > -1) {
      this.setState({ centerCode: e.data })
      if (!isEmpty(leftCode)) {
        setTimeout(() => {
          this.setState({ process: 'BubbleSheet' })
        }, 500)
      }
    }
  }

  onPictuerTake = async data => {
    const { centerCode, pageNumber } = this.state

    this.setState({
      image: data.croppedImage,
      initialImage: data.initialImage,
      rectangleCoordinates: data.rectangleCoordinates,
    })

    const info = centerCode.split('-')
    const exam_id = parseInt(info[1])
    const student_id = parseInt(info[2])
    const payload = {
      student_id,
      exam_id,
      page_num: pageNumber,
      image: `data:image/jpeg;base64,${data.croppedImage}`,
    }
    const ok = await this.props.scanStore.uploads(payload)

    if (ok) {
      this.setState({ pageNumber: pageNumber + 1 })
      this.setState({
        process: 'BarCode',
        leftCode: '',
        centerCode: '',
      })
    } else {
      Alert.alert(`Scan failed.\nPlease scan Page ${pageNumber} again.`)
    }
  }

  onRemoveStudent = id => {
    const { remove } = this.props.scanStore
    remove(id)
  }

  renderDescrption = () => {
    const { process, leftCode, centerCode } = this.state
    if (isEmpty(leftCode) && isEmpty(centerCode)) {
      return 'Scan Left Barcode'
    } else if (isEmpty(leftCode) && !isEmpty(leftCode)) {
      return 'Scan Left Barcode'
    } else if (!isEmpty(leftCode) && isEmpty(centerCode)) {
      return 'Scan Center Barcode'
    } else if (equals(process, 'BubbleSheet')) {
      return 'Scan full document'
    }
    return 'Scan full document'
  }

  renderCamera = () => {
    const { process } = this.state
    const { students } = this.props.scanStore
    let barTop = 0

    if (students.length > 0) {
      barTop = (0.85 * metrics.screenHeight - 0.23 * metrics.screenWidth - 165) / 2
    } else {
      barTop = (0.85 * metrics.screenHeight - 0.08 * metrics.screenWidth - 95) / 2
    }

    switch (process) {
      case 'BubbleSheet':
        return (
          <DocumentScanner
            useBase64
            ref={ref => (this.scanner = ref)}
            onPictureTaken={data => this.onPictuerTake(data)}
            overlayColor="rgba(255,130,0, 0.7)"
            enableTorch={false}
            brightness={0.3}
            saturation={1}
            contrast={1.1}
            quality={0.5}
            onRectangleDetect={({ stableCounter, lastDetectionType }) =>
              this.setState({ stableCounter, lastDetectionType })
            }
            detectionCountBeforeCapture={5}
            detectionRefreshRateInMS={100}
            captureMultiple={true}
            style={screenStyles.camera}
          />
        )
      case 'BarCode':
        return (
          <View style={{ position: 'relative' }}>
            <RNCamera onBarCodeRead={e => this.onBarCodeRead(e)} style={screenStyles.camera} />
            <View style={[screenStyles.rectangle, { top: barTop }]} />
          </View>
        )
      default:
        return (
          <View style={{ position: 'relative' }}>
            <RNCamera onBarCodeRead={e => this.onBarCodeRead(e)} style={screenStyles.camera} />
            <View style={[screenStyles.rectangle, { top: barTop }]} />
          </View>
        )
    }
  }

  render() {
    const { students } = this.props.scanStore

    return (
      <View style={screenStyles.ROOT}>
        {students.length > 0 && (
          <View style={screenStyles.navBar}>
            <ScrollView horizontal>
              {students.map((student, index) => (
                <Student
                  key={`student-${index}`}
                  name={student.student_name}
                  test={`${student.exam_type} ${student.exam_version}`}
                  completed={student.page_num}
                  total={student.pages}
                  onRemoveStudent={() => this.onRemoveStudent(student.id)}
                />
              ))}
            </ScrollView>
          </View>
        )}
        <View style={screenStyles.content}>{this.renderCamera()}</View>
        <View style={screenStyles.descContainer}>
          <Text style={screenStyles.description}>{this.renderDescrption()}</Text>
        </View>
        {students.length > 0 && (
          <View style={screenStyles.footer}>
            <TouchableOpacity onPress={this.removeAllStudents} style={screenStyles.closeButton}>
              <Icon name="times" size={20} color="white" />
            </TouchableOpacity>
            <Button stretch text="I'M DONE" style={screenStyles.doneButton} onPress={this.done} />
          </View>
        )}
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('scanScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="camera" size={25} color={tintColor} />,
  })
}
