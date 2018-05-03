import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ModalStore } from '../../../models/modal-store'
import { ScanStore } from '../../../models/scan-store'
import { ExamStore } from '../../../models/exam-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import Result from './scanned-results-screen.item'
import * as screenStyles from './scanned-results-screen.styles'

export interface ScannedResultsScreenProps extends NavigationScreenProps<{}> {
  modalStore: ModalStore
  scanStore: ScanStore
  examStore: ExamStore
}

@inject('modalStore')
@inject('scanStore')
@inject('examStore')
@observer
export class ScannedResultsScreen extends React.Component<ScannedResultsScreenProps, {}> {
  goTo = async (route: string, id: number) => {
    const { exams, getResults } = this.props.examStore
    const results = await getResults({ id })

    let _exam: any
    exams.forEach(exam => {
      if (exam.id == id) _exam = exam
    })
    _exam.results = results
    this.props.navigation.navigate('testResults', {
      exam: _exam,
    })
  }

  goBack = () => {
    this.props.navigation.navigate('scan')
  }

  onNewTest = () => {
    const { showModal } = this.props.modalStore
    showModal('new-test')
  }

  render() {
    const { students } = this.props.scanStore

    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.goBack} style={screenStyles.navBar}>
          <Icon name="caret-left" size={30} color="rgb(85,97,95)" />
          <Text preset="title" text="    Results" />
        </TouchableOpacity>
        <View style={screenStyles.content}>
          <View style={screenStyles.boderLine}>
            <Text text="ACT'S" />
          </View>
          {students.map(student => (
            <Result
              key={student.id}
              score={34}
              name={student.student_name}
              id={student.exam_id}
              date={student.updated_at}
              onPress={() => this.goTo('testResults', student.exam_id)}
            />
          ))}
        </View>
        <View style={screenStyles.footer}>
          <Button
            text="CREATE NEW TEST"
            stretch
            style={screenStyles.submitButton}
            onPress={this.onNewTest}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
