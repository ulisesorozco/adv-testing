import * as React from 'react'
import { ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import * as Animatable from 'react-native-animatable'
import { ModalStore } from '../../../models/modal-store'
import { BlankBanner } from './blank-banner'
import { AutoBanner } from './auto-banner'
import { color, spacing } from '../../theme'

const ROOT: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  padding: spacing[4],
  position: 'absolute',
  backgroundColor: color.background,
  borderBottomColor: color.dim,
  borderBottomWidth: 1,
}

export interface BannerNavigatorProps {
  modalStore?: ModalStore
  banner?: any
}

@inject('modalStore')
@observer
export class BannerNavigator extends React.Component<BannerNavigatorProps, {}> {
  close = () => {
    const { close } = this.props.modalStore
    this.refs.banner.bounceOut(800).then(() => close())
  }

  getBanner = () => {
    const { banner } = this.props.modalStore

    switch (banner) {
      case 'auto':
        return <AutoBanner close={this.close} />
      case 'blank':
        return <BlankBanner close={this.close} />
      default:
        return <BlankBanner close={this.close} />
    }
  }

  render() {
    const { isBanner } = this.props.modalStore

    return (
      isBanner && (
        <Animatable.View animation="bounceIn" ref="banner" style={ROOT}>
          {this.getBanner()}
        </Animatable.View>
      )
    )
  }
}
