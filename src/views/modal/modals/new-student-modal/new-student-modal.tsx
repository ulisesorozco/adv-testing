import * as React from 'react'
import { View, TouchableOpacity, Keyboard } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isEmpty } from 'ramda'
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
  disabled: boolean
  firstName: string
  lastName: string
}

@inject('modalStore')
@inject('studentStore')
@observer
export class NewStudentModal extends React.Component<NewStudentModalProps, NewStudentModalState> {
  secondInput: any

  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      firstName: '',
      lastName: '',
    }
  }

  onChangeText = async (name: string, mode: string) => {
    if (mode === 'first') {
      await this.setState({ firstName: name })
    } else {
      await this.setState({ lastName: name })
    }

    const { firstName, lastName } = this.state

    if (isEmpty(firstName) || isEmpty(lastName)) {
      this.setState({ disabled: true })
    } else if (!isEmpty(firstName) && !isEmpty(lastName)) {
      this.setState({ disabled: false })
    }
  }

  submit = async () => {
    const { firstName, lastName } = this.state
    if (isEmpty(firstName) || isEmpty(lastName)) return

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
    const { disabled, firstName, lastName } = this.state
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
            onChangeText={e => this.onChangeText(e, 'first')}
            onSubmitEditing={() => this.secondInput.focus()}
            blurOnSubmit={false}
          />
          <TextField
            ref={v => {
              this.secondInput = v
            }}
            value={lastName}
            labelTx="common.lastName"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCreating}
            style={screenStyles.inputTextField}
            inputStyle={screenStyles.inputText}
            returnKeyType="next"
            onChangeText={e => this.onChangeText(e, 'last')}
            onSubmitEditing={() => Keyboard.dismiss()}
            blurOnSubmit={false}
          />
        </View>
        <Button stretch disabled={disabled} text="CREATE STUDENT" onPress={this.submit} />
      </View>
    )
  }
}
