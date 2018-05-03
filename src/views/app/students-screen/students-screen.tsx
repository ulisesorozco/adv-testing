import * as React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import { equals, startsWith, toLower, toUpper, toString } from 'ramda'
import Icon from 'react-native-vector-icons/FontAwesome'

import { translate } from '../../../i18n'
import { ModalStore } from '../../../models/modal-store'
import { UserStore } from '../../../models/user-store'

import { Text } from '../../shared/text'
import { SearchBox } from '../../shared/search-box'
import Student from './students-screen.student'
import * as screenStyles from './students-screen.styles'

export interface StudentsScreenProps extends NavigationScreenProps<{}> {
  modalStore: ModalStore
  userStore: UserStore
}

export interface StudentsScreenState {
  search: string
  visible: any
}

@inject('modalStore')
@inject('userStore')
@observer
export class StudentsScreen extends React.Component<StudentsScreenProps, StudentsScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      visible: [],
    }
    this.props.userStore.getAllUsers()
  }

  componentDidMount() {
    this.initialize()
  }

  initialize() {
    const { filters } = this.props.userStore
    const visible = []

    filters.forEach(filter => {
      visible.push(true)
    })
    this.setState({ visible })
  }

  toDetails = student => {
    const { setCurrentUser } = this.props.userStore
    setCurrentUser(student)
    this.props.navigation.navigate('studentDetails')
  }

  onNewStudent = () => {
    const { showModal } = this.props.modalStore
    showModal('new-student')
  }

  onStudents = (value: string) => {
    const { filters, users } = this.props.userStore
    const { visible } = this.state
    this.initialize()
    filters.forEach((filter, index) => {
      visible[index] = false
      users.map((user, idx) => {
        if (
          equals(user.account_type, 'student') &&
          startsWith(filter, toLower(user.lastname)) &&
          toString(toLower(user.firstname) + ' ' + toLower(user.lastname)).includes(toLower(value))
        ) {
          visible[index] = true
        }
      })
    })
    this.setState({ search: toLower(value), visible })
  }

  render() {
    const { filters, users } = this.props.userStore
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
                  <Text text={toUpper(filter) || ''} />
                </View>
              )}
              {users.map((user, idx) => {
                if (
                  visible[index] &&
                  equals(user.account_type, 'student') &&
                  startsWith(filter, toLower(user.lastname)) &&
                  toString(toLower(user.firstname) + ' ' + toLower(user.lastname)).includes(
                    toLower(search),
                  )
                ) {
                  return (
                    <Student
                      key={`${index}-${idx}`}
                      student={user}
                      toDetails={() => this.toDetails(user)}
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
