import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './edit-scheduled-test-screen.styles'

interface EditCaseProps {
  icon?: string
  text?: string
  label?: string
  stretch?: boolean
}

export default class TestCaseScreen extends React.Component<EditCaseProps, {}> {
  public static defaultProps: Partial<EditCaseProps> = {
    icon: 'caret-right',
    text: '',
    label: 'Test Type',
    stretch: false,
  }

  render() {
    const { icon, text, label, stretch } = this.props
    return (
      <View style={screenStyles.testItem}>
        <Text text={label} />
        <View style={screenStyles.testDetail}>
          <TouchableOpacity>
            <Text preset="button" text={text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={icon} size={20} color={color.palette.black} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
