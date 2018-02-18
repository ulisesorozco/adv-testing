import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { inject, observer } from 'mobx-react'
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

@inject('examStore')
@inject('modalStore')
@observer
export class EditScheduledTestScreen extends React.Component<EditScheduledTestScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  onSelectType = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('select-test')
  }

  render() {
    const { currentExam } = this.props.examStore

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
            text={currentExam ? `${currentExam.exam_type} v${currentExam.version}` : 'SAT v2'}
            icon="caret-right"
            onPress={this.onSelectType}
          />
          <Case label="Test Date" text="12/11/2017" icon="caret-down" />
          <Case label="Test Time" text="10:00 AM" icon="caret-down" />
          <Button
            stretch
            text="UPDATE TEST DETAILS"
            style={screenStyles.editButton}
            onPress={() => this.props.navigation.navigate('editTest')}
          />
          <Button
            stretch
            text="UPDATE TEST DETAILS"
            style={screenStyles.backButton}
            onPress={this.back}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
