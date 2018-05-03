import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { inject, observer } from 'mobx-react'
import { isNil } from 'ramda'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import Case from './edit-scheduled-test-screen.item'
import { ExamStore } from '../../../models/exam-store'
import { ModalStore } from '../../../models/modal-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './edit-scheduled-test-screen.styles'

export interface EditScheduledTestScreenProps extends NavigationScreenProps<{}> {
  examStore: ExamStore
  modalStore: ModalStore
}

export interface EditScheduledTestScreenState {
  currentDate: string
  currentTime: string
  dateTimePickerMode: string
  isDateTimePickerVisible: boolean
}

@inject('examStore')
@inject('modalStore')
@observer
export class EditScheduledTestScreen extends React.Component<
  EditScheduledTestScreenProps,
  EditScheduledTestScreenState
> {
  constructor(props) {
    super(props)
    this.state = {
      dateTimePickerMode: 'date',
      isDateTimePickerVisible: false,
      currentDate: moment(new Date()).format('MM/DD/YYYY'),
      currentTime: moment(new Date()).format('LT'),
    }
  }

  back = () => {
    this.props.navigation.goBack()
  }

  _handleDatePicked = value => {
    const { dateTimePickerMode } = this.state
    const date = new Date(value)

    if (dateTimePickerMode === 'date') {
      const _date = moment(date).format('MM/DD/YYYY')
      this.setState({ currentDate: _date })
    } else {
      const _date = moment(date).format('LT')
      this.setState({ currentTime: _date })
    }
    this._hideDateTimePicker()
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }

  onSelectType = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('select-test')
  }

  onSelectDate = () => {
    this.setState({ dateTimePickerMode: 'date' })
    this._showDateTimePicker()
  }

  onSelectTime = () => {
    this.setState({ dateTimePickerMode: 'time' })
    this._showDateTimePicker()
  }

  onUpdateTest = async () => {
    const { currentExam, updateExam } = this.props.examStore
    const payload = {
      title: currentExam.title,
      exam_type: currentExam.exam_type,
      version: currentExam.version,
      section: currentExam.section,
    }
    await updateExam(payload)
    this.props.navigation.goBack()
  }

  render() {
    const { currentExam, currentType } = this.props.examStore
    const { currentDate, currentTime, dateTimePickerMode, isDateTimePickerVisible } = this.state
    const type = this.props.examStore.getType(currentExam.exam_type_id)

    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity style={screenStyles.navBar} onPress={this.back}>
          <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          <View style={screenStyles.navTitle}>
            <Text preset="title" text={type.exam_type} />
            <Text text={`ID: ${currentExam.id}`} />
          </View>
        </TouchableOpacity>
        <View style={screenStyles.content}>
          <Case
            text={isNil(currentType) ? '' : `${currentType.exam_type} ${currentType.exam_version}`}
            icon="caret-right"
            onPress={this.onSelectType}
          />
          <Case
            label="Test Date"
            text={currentDate}
            icon="caret-down"
            onPress={this.onSelectDate}
          />
          <Case
            label="Test Time"
            text={currentTime}
            icon="caret-down"
            onPress={this.onSelectTime}
          />
          <Button
            stretch
            text="UPDATE TEST DETAILS"
            style={screenStyles.editButton}
            onPress={this.onUpdateTest}
          />
          <View style={screenStyles.backContainer}>
            <TouchableOpacity style={screenStyles.backButton} onPress={this.back}>
              <Text style={screenStyles.backText}>Nevermind. Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          mode={dateTimePickerMode}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
