import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './settings-screen.styles'

interface SettingsScreenProps {
  checked: boolean
}

export default class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  render() {
    const { checked } = this.props
    return (
      <View style={screenStyles.testItem}>
        <Text preset="button" text="ACT - V1" />
        <View style={[screenStyles.testCircle, { backgroundColor: color.button }]}>
          {checked && <Icon name="check" size={20} color={color.palette.white} />}
        </View>
      </View>
    )
  }
}
