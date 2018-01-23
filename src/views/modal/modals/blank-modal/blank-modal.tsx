import * as React from 'react'
import { ScrollView, View, ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Button } from '../../../shared/button'
import { color, spacing } from '../../../theme'
import { ModalStore } from '../../../../models/modal-store'

const ROOT: ViewStyle = { backgroundColor: color.background }

export interface BlankModalProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class BlankModal extends React.Component<BlankModalProps, {}> {
  render() {
    const { close } = this.props.modalStore

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          style={ROOT}
          contentContainerStyle={{ paddingVertical: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1, paddingHorizontal: spacing[4] }}>
            <Button stretch text="Back" onPress={close} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
