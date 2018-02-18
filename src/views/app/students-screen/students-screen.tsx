import * as React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import { startsWith, toLower, toUpper, toString } from 'ramda'
import Icon from 'react-native-vector-icons/FontAwesome'

import { translate } from '../../../i18n'
import { ModalStore } from '../../../models/modal-store'
import { StudentStore } from '../../../models/student-store'

import { Text } from '../../shared/text'
import { SearchBox } from '../../shared/search-box'
import Student from './students-screen.student'
import * as screenStyles from './students-screen.styles'

export interface StudentsScreenProps extends NavigationScreenProps<{}> {
  modalStore: ModalStore
  studentStore: StudentStore
}

export interface StudentsScreenState {
  search: string
  visible: any
}

@inject('modalStore')
@inject('studentStore')
@observer
export class StudentsScreen extends React.Component<StudentsScreenProps, StudentsScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      visible: [],
    }
    this.props.studentStore.getAllStudents()
  }

  componentDidMount() {
    this.initialize()
  }

  initialize() {
    const { filters } = this.props.studentStore
    const visible = []

    filters.forEach(filter => {
      visible.push(true)
    })
    this.setState({ visible })
  }

  toDetails = student => {
    const { setCurrentStudent } = this.props.studentStore
    setCurrentStudent(student)
    this.props.navigation.navigate('studentDetails')
  }

  onNewStudent = () => {
    const { showModal } = this.props.modalStore
    showModal('new-student')
  }

  onStudents = (value: string) => {
    const { filters, students } = this.props.studentStore
    const { visible } = this.state
    this.initialize()
    filters.forEach((filter, index) => {
      visible[index] = false
      students.map((student, idx) => {
        if (
          startsWith(filter, toLower(student.lastname)) &&
          toString(toLower(student.firstname) + ' ' + toLower(student.lastname)).includes(
            toLower(value),
          )
        ) {
          visible[index] = true
        }
      })
    })
    this.setState({ search: toLower(value), visible })
  }

  render() {
    const { filters, students } = this.props.studentStore
    const { search, visible } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="STUDENTS" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={this.onNewStudent}>
            <Icon name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <SearchBox onChangeText={e => this.onStudents(e)} />
        <ScrollView>
          {filters.map((filter, index) => (
            <View key={`block${index}`}>
              {visible[index] && (
                <View key={`ft-${index}`} style={screenStyles.boderLine}>
                  <Text text={toUpper(filter)} />
                </View>
              )}
              {students.map((student, idx) => {
                if (
                  visible[index] &&
                  startsWith(filter, toLower(student.lastname)) &&
                  toString(toLower(student.firstname) + ' ' + toLower(student.lastname)).includes(
                    toLower(search),
                  )
                ) {
                  return (
                    <Student
                      key={`${index}-${idx}`}
                      student={student}
                      toDetails={() => this.toDetails(student)}
                    />
                  )
                }
                return null
              })}
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="graduation-cap" size={25} color={tintColor} />,
  })
}
