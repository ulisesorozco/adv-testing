import * as React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { inject, observer } from 'mobx-react'
import { ModalStore } from '../../../models/modal-store'
import { BlankModal } from './blank-modal'
import { NewStudentModal } from './new-student-modal'
import { NewTestModal } from './new-test-modal'
import { SelectTestModal } from './select-test-modal'
import { TestCreatedModal } from './test-created-modal'
import * as screenStyles from './modals.styles'

export interface ModalNavigatorProps {
  modalStore?: ModalStore
}

@inject('modalStore')
@observer
export class ModalNavigator extends React.Component<ModalNavigatorProps, {}> {
  _closeModal = () => {
    const { close } = this.props.modalStore
    close()
  }

  _renderModal = () => {
    const { modal } = this.props.modalStore

    switch (modal) {
      case 'test-created':
        return <TestCreatedModal />
      case 'new-student':
        return <NewStudentModal />
      case 'new-test':
        return <NewTestModal />
      case 'select-test':
        return <SelectTestModal />
      default:
        return <BlankModal />
    }
  }

  render() {
    const { isModal } = this.props.modalStore

    return (
      <Modal isVisible={isModal} swipeDirection="left" onSwipe={this._closeModal}>
        <View style={screenStyles.ROOT}>{this._renderModal()}</View>
      </Modal>
    )
  }
}
