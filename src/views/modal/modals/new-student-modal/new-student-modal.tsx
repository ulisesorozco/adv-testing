import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { TextField } from '../../../shared/text-field'
import { KeyboardSpacer } from '../../../shared/keyboard-spacer'
import { ModalStore } from '../../../../models/modal-store'
import { StudentStore } from '../../../../models/student-store'
import * as screenStyles from './new-student-modal.styles'
import { color } from '../../../theme'

export interface NewStudentModalProps {
  modalStore?: ModalStore
  studentStore?: StudentStore
}

export interface NewStudentModalState {
  firstName: string
  lastName: string
}

@inject('modalStore')
@inject('studentStore')
@observer
export class NewStudentModal extends React.Component<NewStudentModalProps, NewStudentModalState> {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  submit = async () => {
    const { firstName, lastName } = this.state
    const { createStudent, getAllStudents } = this.props.studentStore
    const { close } = this.props.modalStore
    const payload = {
      firstname: firstName,
      lastname: lastName,
    }

    await createStudent(payload)
    await getAllStudents()
    close()
  }

  render() {
    const { close } = this.props.modalStore
    const { firstName, lastName } = this.state
    const isCreating = false

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="NEW STUDENT" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={close}>
            <Icon name="times" size={20} color={color.palette.white} />
          </TouchableOpacity>
        </View>
        <View style={screenStyles.container}>
          <TextField
            value={firstName}
            labelTx="common.firstName"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCreating}
            style={screenStyles.inputTextField}
            inputStyle={screenStyles.inputText}
            returnKeyType="next"
            onChangeText={e => this.setState({ firstName: e })}
            onSubmitEditing={() => {}}
            blurOnSubmit={false}
          />
          <TextField
            value={lastName}
            labelTx="common.lastName"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCreating}
            style={screenStyles.inputTextField}
            inputStyle={screenStyles.inputText}
            returnKeyType="next"
            onChangeText={e => this.setState({ lastName: e })}
            onSubmitEditing={() => {}}
            blurOnSubmit={false}
          />
        </View>
        <Button stretch text="CREATE STUDENT" onPress={this.submit} />
      </View>
    )
  }
}
