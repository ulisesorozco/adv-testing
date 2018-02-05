import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { ModalStore } from '../../../../models/modal-store'
import * as screenStyles from './select-test-modal.styles'

export interface SelectTestModalProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class SelectTestModal extends React.Component<SelectTestModalProps, {}> {
  onSelect = async () => {
    const { showModal, close } = this.props.modalStore
    await close()
    showModal('test-created')
  }
  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Text preset="title" text="SELECT TEST" />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={screenStyles.boderLine}>
            <Text text="A" />
          </View>
          <Button type="check" preset="checked" text="ACT V1" onPress={this.onSelect} stretch />
          <Button type="check" preset="unChecked" text="ACT V1" onPress={this.onSelect} stretch />
          <Button type="check" preset="checked" text="ACT V1" onPress={this.onSelect} stretch />
          <View style={screenStyles.boderLine}>
            <Text text="A" />
          </View>
          <Button type="check" preset="checked" text="ACT V1" onPress={this.onSelect} stretch />
          <Button type="check" preset="unChecked" text="ACT V1" onPress={this.onSelect} stretch />
          <Button type="check" preset="checked" text="ACT V1" onPress={this.onSelect} stretch />
        </ScrollView>
      </View>
    )
  }
}
