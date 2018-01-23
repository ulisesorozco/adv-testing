import * as React from 'react'
import { Modal, View, ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import { ModalStore } from '../../../models/modal-store'
import { BlankModal } from './blank-modal'

const ROOT: ViewStyle = { flex: 1, position: 'absolute' }

export interface ModalNavigatorProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class ModalNavigator extends React.Component<ModalNavigatorProps, {}> {
  closeModal = () => {
    const { close } = this.props.modalStore
    close()
  }

  getModal = () => {
    const { modal } = this.props.modalStore

    switch (modal) {
      case 'confirm':
        return <BlankModal />
      default:
        return <BlankModal />
    }
  }

  render() {
    const { isModal } = this.props.modalStore

    return (
      isModal && (
        <View style={ROOT}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={isModal}
            onRequestClose={this.closeModal}
          >
            {this.getModal()}
          </Modal>
        </View>
      )
    )
  }
}
