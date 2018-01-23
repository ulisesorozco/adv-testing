import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Button } from '../../../shared/button'
import { Text } from '../../../shared/text'
import { ModalStore } from '../../../../models/modal-store'

const ROOT: ViewStyle = { flex: 1 }

export interface BlankBannerProps {
  modalStore?: ModalStore
  close?: any
}

@inject('modalStore')
@observer
export class BlankBanner extends React.Component<BlankBannerProps, {}> {
  render() {
    const { notiMessage } = this.props.modalStore

    return (
      <View style={ROOT}>
        <Text preset="bold" text={notiMessage} />
        <Button stretch text="Back" onPress={this.props.close} />
      </View>
    )
  }
}
