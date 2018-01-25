import * as React from 'react'
import { View } from 'react-native'
import { Text } from '../../shared/text'
import { NavigationScreenProps } from 'react-navigation'

import * as screenStyles from './settings-screen.styles'

export interface SettingsScreenProps extends NavigationScreenProps<{}> {}

export class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Text preset="header" tx="settingsScreen.header" />
      </View>
    )
  }
}
