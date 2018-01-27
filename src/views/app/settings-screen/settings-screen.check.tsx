import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './settings-screen.styles'

interface TestCaseScreenProps {
  checked?: boolean
  text?: string
}

export default class TestCaseScreen extends React.Component<TestCaseScreenProps, {}> {
  public static defaultProps: Partial<TestCaseScreenProps> = {
    checked: false,
    text: '',
  }

  render() {
    const { checked, text } = this.props
    return (
      <View style={screenStyles.testItem}>
        <Text preset="button" text={text} />
        <View
          style={[
            screenStyles.testCircle,
            { backgroundColor: checked ? color.button : color.transparent },
          ]}
        >
          {checked && <Icon name="check" size={20} color={color.palette.white} />}
        </View>
      </View>
    )
  }
}
