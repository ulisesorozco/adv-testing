import * as React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { equals, filter, isNil } from 'ramda'
import { translate } from '../../../i18n'
import { ModalStore } from '../../../models/modal-store'
import { UserStore } from '../../../models/user-store'
import { ExamStore } from '../../../models/exam-store'
import Scheduled from './student-details-screen.scheduled'
import Completed from './student-details-screen.completed'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './student-details-screen.styles'

export interface StudentDetailsScreenProps extends NavigationScreenProps<{}> {
  modalStore: ModalStore
  userStore: UserStore
  examStore: ExamStore
}

@inject('modalStore')
@inject('userStore')
@inject('examStore')
@observer
export class StudentDetailsScreen extends React.Component<StudentDetailsScreenProps, {}> {
  componentDidMount() {
    this.props.examStore.getAllExams()
    this.props.examStore.getExamTypes()
  }

  back = () => {
    this.props.navigation.goBack()
  }

  goToComplete = async (exam: any) => {
    const { getResults } = this.props.examStore
    const results = await getResults({ id: exam.id })
    exam.results = results
    this.props.navigation.navigate('testResults', {
      exam,
    })
  }

  goToScheduled = (exam: any) => {
    this.props.examStore.setCurrentExam(exam)
    this.props.navigation.navigate('manageTests')
  }

  onNewTest = () => {
    const { showModal } = this.props.modalStore
    showModal('new-test')
  }

  render() {
    const { currentUser } = this.props.userStore
    const { exams, getType } = this.props.examStore

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.content}>
          <TouchableOpacity onPress={this.back} style={screenStyles.navBar}>
            <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
            <Text preset="title" text={`    ${currentUser.firstname} ${currentUser.lastname}`} />
          </TouchableOpacity>
          <ScrollView>
            <View style={screenStyles.boderLine}>
              <Text text="Scheduled Tests" />
            </View>
            <View>
              {filter(
                exam => equals(currentUser.id, exam.student_id) && equals(exam.is_processed, 'no'),
                exams,
              ).map(exam => {
                return (
                  <Scheduled
                    key={exam.id}
                    exam={exam}
                    type={getType(exam.exam_type_id)}
                    onPress={() => this.goToScheduled(exam)}
                  />
                )
              })}
            </View>
            <View style={screenStyles.boderLine}>
              <Text text="Completed Tests" />
            </View>
            <View>
              {filter(
                exam => equals(currentUser.id, exam.student_id) && equals(exam.is_processed, 'yes'),
                exams,
              ).map(exam => {
                return (
                  <Completed
                    key={exam.id}
                    exam={exam}
                    type={getType(exam.exam_type_id)}
                    onPress={() => this.goToComplete(exam)}
                  />
                )
              })}
            </View>
            <View style={screenStyles.scrollSpace} />
          </ScrollView>
        </View>
        <View style={screenStyles.submitContainer}>
          <Button
            text="CREATE NEW TEST"
            style={screenStyles.submitButton}
            onPress={this.onNewTest}
            stretch
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
