import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
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
    const { students } = this.props.studentStore
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="STUDENTS" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={this.onNewStudent}>
            <Icon name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <SearchBox onChangeText={e => console.log(e)} />
        <View style={screenStyles.boderLine}>
          <Text text="A" />
        </View>
        {students.map((student, index) => (
          <Student key={`std${index}`} student={student} toDetails={this.toDetails} />
        ))}
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="graduation-cap" size={25} color={tintColor} />,
  })
}
