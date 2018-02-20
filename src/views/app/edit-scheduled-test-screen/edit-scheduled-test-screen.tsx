import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { inject, observer } from 'mobx-react'
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

  render() {
    const { currentExam } = this.props.examStore
    const { currentDate, currentTime, dateTimePickerMode, isDateTimePickerVisible } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity style={screenStyles.navBar} onPress={this.back}>
          <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          <View style={screenStyles.navTitle}>
            <Text preset="title" text="SAT v2" />
            <Text text="ID:1234522" />
          </View>
        </TouchableOpacity>
        <View style={screenStyles.content}>
          <Case
            text={currentExam ? currentExam.title : 'ACT 1 (math)'}
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
            onPress={() => this.props.navigation.navigate('editTest')}
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
