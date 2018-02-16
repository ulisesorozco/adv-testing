import * as React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import { startsWith, toLower, toUpper } from 'ramda'
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

@inject('modalStore')
@inject('studentStore')
@observer
export class StudentsScreen extends React.Component<StudentsScreenProps, {}> {
  componentDidMount() {
    this.props.studentStore.getAllStudents()
  }

  toDetails = () => {
    this.props.navigation.navigate('studentDetails')
  }

  onNewStudent = () => {
    const { showModal } = this.props.modalStore
    showModal('new-student')
  }

  render() {
    const { filters, students } = this.props.studentStore

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="STUDENTS" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={this.onNewStudent}>
            <Icon name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <SearchBox onChangeText={e => console.log(e)} />
        <ScrollView>
          {filters.map((filter, index) => (
            <View key={`block${index}`}>
              <View key={`ft-${index}`} style={screenStyles.boderLine}>
                <Text text={toUpper(filter)} />
              </View>
              {students.map((student, idx) => {
                if (startsWith(filter, toLower(student.lastname))) {
                  return (
                    <Student key={`${index}-${idx}`} student={student} toDetails={this.toDetails} />
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
