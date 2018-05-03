import * as React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import { isNil, toUpper, toLower, isEmpty } from 'ramda'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import Case from './new-test-modal.item'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { color } from '../../../theme'
import { ExamStore } from '../../../../models/exam-store'
import { ModalStore } from '../../../../models/modal-store'
import { UserStore } from '../../../../models/user-store'
import * as screenStyles from './new-test-modal.styles'

export interface NewTestModalProps {
  examStore?: ExamStore
  modalStore?: ModalStore
  userStore?: UserStore
}

export interface NewTestModalState {
  currentDate: string
  currentTime: string
  dateTimePickerMode: string
  isDateTimePickerVisible: boolean
  isDisabled: boolean
}

@inject('examStore')
@inject('modalStore')
@inject('userStore')
@observer
export class NewTestModal extends React.Component<NewTestModalProps, NewTestModalState> {
  constructor(props) {
    super(props)
    this.state = {
      dateTimePickerMode: 'date',
      isDateTimePickerVisible: false,
      currentDate: moment(new Date()).format('MM/DD/YYYY'),
      currentTime: moment(new Date()).format('LT'),
      isDisabled: false,
    }
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

  getSection = () => {
    const { currentSection } = this.props.examStore
    if (isNil(currentSection) || isEmpty(currentSection)) return ''
    let section = currentSection
    section = section.replace('1', 'MATH')
    section = section.replace('2', 'READING')
    section = section.replace('3', 'WRITING')
    section = section.replace('4', 'ESSAY')
    return section
  }

  onCreate = async () => {
    const { currentDate, currentTime, isDisabled } = this.state
    if (isDisabled) return
    const { close, showModal } = this.props.modalStore
    const { currentUser } = this.props.userStore
    const {
      createExam,
      currentType,
      getAllExams,
      currentSection,
      setCurrentExam,
      setCurrentSection,
      sendEmail,
    } = this.props.examStore
    const _currentTime = toLower(currentTime.replace(' ', ''))
    const payload = {
      student_id: currentUser.id,
      exam_type_id: currentType.id,
      exam_section_ids: currentSection,
      scheduled: `${currentDate} ${_currentTime}`,
    }
    this.setState({ isDisabled: true })

    const ok = await createExam(payload)
    await close()
    if (ok) {
      showModal('test-created')
      setCurrentExam(null)
      setCurrentSection(null)
      getAllExams()
      sendEmail({ id: 1, email: 'hiroki.moto.pro@gmail.com' })
    }
    this.setState({ isDisabled: false })
  }

  onSelectType = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('select-test')
  }

  onSelectSection = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('select-section')
  }

  onSelectDate = () => {
    this.setState({ dateTimePickerMode: 'date' })
    this._showDateTimePicker()
  }

  onSelectTime = () => {
    this.setState({ dateTimePickerMode: 'time' })
    this._showDateTimePicker()
  }

  render() {
    const { close } = this.props.modalStore
    const { currentType } = this.props.examStore
    const {
      currentDate,
      currentTime,
      dateTimePickerMode,
      isDateTimePickerVisible,
      isDisabled,
    } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="NEW TEST" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={close}>
            <Icon name="times" size={20} color={color.palette.white} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Case
            text={isNil(currentType) ? '' : `${currentType.exam_type} ${currentType.exam_version}`}
            icon="caret-right"
            onPress={this.onSelectType}
          />
          <Case
            label="Test section"
            text={this.getSection()}
            icon="caret-right"
            onPress={this.onSelectSection}
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
          <Button disabled={isDisabled} stretch text="CREATE TEST" onPress={this.onCreate} />
        </ScrollView>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          mode={dateTimePickerMode}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    )
  }
}
