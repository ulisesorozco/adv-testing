import * as React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Case from './new-test-modal.item'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { color } from '../../../theme'
import { ModalStore } from '../../../../models/modal-store'
import * as screenStyles from './new-test-modal.styles'

export interface NewTestModalProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class NewTestModal extends React.Component<NewTestModalProps, {}> {
  onCreate = async () => {
    const { close, showModal } = this.props.modalStore
    await close()
    showModal('test-created')
  }

  onSelectType = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('select-test')
  }

  render() {
    const { close } = this.props.modalStore

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.header}>
          <Text preset="title" text="NEW TEST" />
          <TouchableOpacity style={screenStyles.closeButton} onPress={close}>
            <Icon name="times" size={20} color={color.palette.white} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Case text="Select a type of test" icon="caret-right" onPress={this.onSelectType} />
          <Case label="Test Date" text="12/11/2017" icon="caret-down" />
          <Case label="Test Time" text="10:00 AM" icon="caret-down" />
          <Button stretch text="CREATE TEST" onPress={this.onCreate} />
        </ScrollView>
      </View>
    )
  }
}
