import * as React from 'react'
import { View } from 'react-native'
import { Text } from '../../shared/text'
import { NavigationScreenProps } from 'react-navigation'

import * as screenStyles from './scan-screen.styles'

export interface ScanScreenProps extends NavigationScreenProps<{}> {}

export class ScanScreen extends React.Component<ScanScreenProps, {}> {
  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Text preset="header" tx="scanScreen.header" />
      </View>
    )
  }
}
