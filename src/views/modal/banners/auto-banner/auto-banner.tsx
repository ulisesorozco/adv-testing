import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Text } from '../../../shared/text'
import { ModalStore } from '../../../../models/modal-store'
import * as ScreenStyles from './auto-banner.styles'

export interface AutoBannerProps {
  modalStore?: ModalStore
  close?: any
}

@inject('modalStore')
@observer
export class AutoBanner extends React.Component<AutoBannerProps, {}> {
  componentDidMount() {
    const { close } = this.props
    setTimeout(() => {
      close()
    }, 3000)
  }

  render() {
    const { notiMessage } = this.props.modalStore

    return (
      <View style={ScreenStyles.ROOT}>
        <Text preset="bold" text={notiMessage} style={ScreenStyles.notification} />
      </View>
    )
  }
}
