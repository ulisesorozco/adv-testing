import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Button } from '../../../shared/button'
import { ModalStore } from '../../../../models/modal-store'
import * as screenStyles from './select-test-modal.styles'

export interface SelectTestModalProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class SelectTestModal extends React.Component<SelectTestModalProps, {}> {
  render() {
    const { close } = this.props.modalStore

    return (
      <View style={screenStyles.ROOT}>
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={screenStyles.bannerContainer} />
          <View style={screenStyles.infoContainer} />
          <View style={screenStyles.submitContainer}>
            <Button stretch text="EMAIL BUBBLE SHEET" onPress={close} />
            <Button stretch text="PRINT BUBBLE SHEET" onPress={close} />
          </View>
          <View style={screenStyles.doneContainer} />
        </ScrollView>
      </View>
    )
  }
}
