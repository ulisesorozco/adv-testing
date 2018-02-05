import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { TextField } from '../../../shared/text-field'
import { ModalStore } from '../../../../models/modal-store'
import * as screenStyles from './new-student-modal.styles'
import { color } from '../../../theme'

export interface NewStudentModalProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class NewStudentModal extends React.Component<NewStudentModalProps, {}> {
  render() {
    const { close } = this.props.modalStore
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
            value={''}
            labelTx="common.firstName"
            placeholderTx="common.firstNamePlaceholder"
            onChangeText={e => {}}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCreating}
            style={screenStyles.inputTextField}
            inputStyle={screenStyles.inputText}
            returnKeyType="next"
            onSubmitEditing={() => {}}
            blurOnSubmit={false}
          />
          <TextField
            value={''}
            labelTx="common.lastName"
            placeholderTx="common.lastNamePlaceholder"
            onChangeText={e => {}}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isCreating}
            style={screenStyles.inputTextField}
            inputStyle={screenStyles.inputText}
            returnKeyType="next"
            onSubmitEditing={() => {}}
            blurOnSubmit={false}
          />
        </View>
        <Button stretch text="CREATE STUDENT" onPress={close} />
      </View>
    )
  }
}
