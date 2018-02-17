import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../../shared/text'
import { color } from '../../../theme'

import * as screenStyles from './new-test-modal.styles'

interface EditCaseProps {
  icon?: string
  text?: string
  label?: string
  onPress?(): void
}

export default class TestCaseScreen extends React.Component<EditCaseProps, {}> {
  public static defaultProps: Partial<EditCaseProps> = {
    icon: 'caret-right',
    text: '',
    label: 'Test Type',
  }

  render() {
    const { icon, text, label, onPress } = this.props
    return (
      <View style={screenStyles.testItem}>
        <Text text={label} />
        <TouchableOpacity style={screenStyles.testDetail} onPress={onPress}>
          <Text preset="button" text={text} style={screenStyles.itemLabel} />
          <Icon name={icon} size={20} color={color.ligthGrey} />
        </TouchableOpacity>
      </View>
    )
  }
}
