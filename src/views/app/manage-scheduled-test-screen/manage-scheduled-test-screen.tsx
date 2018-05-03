import * as React from 'react'
import { Alert, View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Mailer from 'react-native-mail'
import { ExamStore } from '../../../models/exam-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './manage-scheduled-test-screen.styles'

export interface ManageScheduledTestScreenProps extends NavigationScreenProps<{}> {
  examStore: ExamStore
}

export interface ManageScheduledTestScreenState {
  selectedPrinter: any
}

@inject('examStore')
@observer
export class ManageScheduledTestScreen extends React.Component<
  ManageScheduledTestScreenProps,
  ManageScheduledTestScreenState
> {
  constructor(props) {
    super(props)
    this.state = { selectedPrinter: null }
  }

  back = () => {
    this.props.navigation.goBack()
  }

  cancelTest = async () => {
    const { currentExam, removeExam, getAllExams } = this.props.examStore
    await removeExam(currentExam.id)
    await getAllExams()
    this.props.navigation.goBack()
  }

  sendEmail = () => {
    Mailer.mail(
      {
        subject: 'need help',
        recipients: ['ulisesiorozco@gmail.com'],
        ccRecipients: ['ulisesiorozco.pro@gmail.com'],
        bccRecipients: ['ulisesiorozco.pro@gmail.com'],
        body: '<b>A Bold Body</b>',
        isHTML: true,
        // attachment: {
        //   path: '',
        //   type: '',
        //   name: '',
        // },
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
            { text: 'Cancel', onPress: () => console.log('Cancel: Email Error Response') },
          ],
          { cancelable: true },
        )
      },
    )
  }

  printSheet = () => {
    this.props.navigation.navigate('print')
  }

  render() {
    const { currentExam } = this.props.examStore
    const type = this.props.examStore.getType(currentExam.exam_type_id)

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.top}>
          <TouchableOpacity style={screenStyles.navBar} onPress={this.back}>
            <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
            <View style={screenStyles.navTitle}>
              <Text preset="title" text={type.exam_type} />
              <Text text={`ID: ${currentExam.id}`} />
            </View>
          </TouchableOpacity>
          <View style={screenStyles.manageContainer}>
            <View style={screenStyles.testType}>
              <Text text="Test Type" />
              <Text preset="bold" text={type.exam_type} style={screenStyles.boldText} />
            </View>
            <View style={screenStyles.testDetail}>
              <View>
                <Text text="Test Date" />
                <Text preset="bold" text="12/11/2017" style={screenStyles.boldText} />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text text="Test Time" />
                <Text preset="bold" text="10:00 AM EST" style={screenStyles.boldText} />
              </View>
            </View>
            <View style={screenStyles.testButtons}>
              <Button
                stretch
                text="EDIT DETAILS"
                style={screenStyles.editButton}
                textStyle={screenStyles.editButtonText}
                onPress={() => this.props.navigation.navigate('editScheduledTest')}
              />
              <Button
                stretch
                text="CANCEL TEST"
                style={screenStyles.cancelButton}
                onPress={this.cancelTest}
              />
            </View>
          </View>
        </View>
        <View style={screenStyles.space} />
        <View style={screenStyles.footer}>
          <Button
            text="EMAIL BUBBLE SHEET"
            textStyle={screenStyles.submitButton}
            stretch
            onPress={this.sendEmail}
          />
          <View style={screenStyles.spaceButton} />
          <Button
            text="PRINT BUBBLE SHEET"
            textStyle={screenStyles.submitButton}
            stretch
            onPress={this.printSheet}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
