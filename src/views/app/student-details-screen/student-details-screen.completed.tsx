import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './student-details-screen.styles'

interface CompletedScreenProps {
  text?: string
  onPress?: () => void
}

export default class CompletedScreen extends React.Component<CompletedScreenProps, {}> {
  public static defaultProps: Partial<CompletedScreenProps> = {
    text: '',
  }

  render() {
    const { text, onPress } = this.props
    return (
      <TouchableOpacity style={screenStyles.completedItem} onPress={onPress}>
        <View style={screenStyles.completedHeader}>
          <Text text={text} />
        </View>
        <View style={screenStyles.completedCenter}>
          <Text text="SAT v2" />
          <Text text="ID: 1234522 | 10/30/2017" />
        </View>
        <View style={screenStyles.completedFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }
}
