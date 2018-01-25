import * as React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'

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

  static navigationOptions = ({ navigation }) => ({
    title: translate('settingsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="gear" size={25} color={tintColor} />,
  })
}
