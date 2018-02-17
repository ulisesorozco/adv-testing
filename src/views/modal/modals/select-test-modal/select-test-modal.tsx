import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { CheckBox } from './select-test-modal.check'
import { ModalStore } from '../../../../models/modal-store'
import { NavigationStore } from '../../../../views/navigation'
import { last } from 'ramda'
import * as screenStyles from './select-test-modal.styles'

export interface SelectTestModalProps {
  modalStore: ModalStore
  navigationStore: NavigationStore
}

@inject('modalStore')
@inject('navigationStore')
@observer
export class SelectTestModal extends React.Component<SelectTestModalProps, {}> {
  onSelect = async () => {
    const { showModal, close } = this.props.modalStore
    const { routes } = this.props.navigationStore.state
    if (last(last(routes).routes).routeName === 'studentDetails') {
      await close()
      showModal('new-test')
    } else {
      close()
    }
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
          <Button
            preset="secondary"
            text="ACT V1"
            stretch
            renderRight={<CheckBox />}
            style={screenStyles.testButton}
            onPress={this.onSelect}
          />
          <Button
            preset="secondary"
            text="ACT V2"
            stretch
            renderRight={<CheckBox checked />}
            style={screenStyles.testButton}
            onPress={this.onSelect}
          />
          <Button
            preset="secondary"
            text="ACT V3"
            stretch
            renderRight={<CheckBox />}
            style={screenStyles.testButton}
            onPress={this.onSelect}
          />
        </ScrollView>
      </View>
    )
  }
}
