import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { ModalStore } from '../../../models/modal-store'
import { StudentStore } from '../../../models/student-store'
import Scheduled from './student-details-screen.scheduled'
import Completed from './student-details-screen.completed'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './student-details-screen.styles'

export interface StudentDetailsScreenProps extends NavigationScreenProps<{}> {
  modalStore: ModalStore
  studentStore: StudentStore
}

@inject('modalStore')
@inject('studentStore')
@observer
export class StudentDetailsScreen extends React.Component<StudentDetailsScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  goTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  onNewTest = () => {
    const { showModal } = this.props.modalStore
    showModal('new-test')
  }

  render() {
    const { currentStudent } = this.props.studentStore
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity onPress={this.back} style={screenStyles.navBar}>
          <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          <Text
            preset="title"
            text={`    ${currentStudent.firstname} ${currentStudent.lastname}`}
          />
        </TouchableOpacity>
        <View style={screenStyles.boderLine}>
          <Text text="Scheduled Tests" />
        </View>
        <View>
          <Scheduled onPress={() => this.goTo('manageTests')} />
        </View>
        <View style={screenStyles.boderLine}>
          <Text text="Completed Tests" />
        </View>
        <View>
          <Completed text="1200" onPress={() => this.goTo('testResults')} />
        </View>
        <Button
          text="CREATE NEW TEST"
          style={screenStyles.submitButton}
          onPress={this.onNewTest}
          stretch
        />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
