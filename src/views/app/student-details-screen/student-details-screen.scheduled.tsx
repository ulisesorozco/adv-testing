import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './student-details-screen.styles'

interface ScheduledScreenProps {
  onPress?(): void
}

export default class ScheduledScreen extends React.Component<ScheduledScreenProps, {}> {
  render() {
    return (
      <TouchableOpacity style={screenStyles.scheduledItem} onPress={this.props.onPress}>
        <View>
          <Text text="SAT v2" />
          <Text text="ID: 1234522 | 10/30/2017" />
        </View>
        <View style={screenStyles.scheduledFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }
}
