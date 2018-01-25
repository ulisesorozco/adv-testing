import * as React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'

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

  static navigationOptions = ({ navigation }) => ({
    title: translate('scanScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="camera" size={25} color={tintColor} />,
  })
}
