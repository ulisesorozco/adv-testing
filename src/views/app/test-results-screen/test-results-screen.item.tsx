import * as React from 'react'
import { View } from 'react-native'
import { Text } from '../../shared/text'
import { color, spacing } from '../../theme'

import * as screenStyles from './test-results-screen.styles'

interface TestResultProps {
  text?: string
  completed?: number
  total?: number
}

export default class TestResult extends React.Component<TestResultProps, {}> {
  public static defaultProps: Partial<TestResultProps> = {
    text: 'Test',
    completed: 0,
    total: 0,
  }

  render() {
    const { text, completed, total } = this.props
    return (
      <View style={screenStyles.resultItem}>
        <View style={screenStyles.resultText}>
          <Text text={text} />
          <Text text={`${completed} of ${total}`} />
        </View>
        <View style={screenStyles.resultProgress}>
          <View
            style={{
              flex: completed,
              padding: spacing[1],
              backgroundColor: color.right,
            }}
          >
            <Text style={screenStyles.progressText} text={completed.toString()} />
          </View>
          <View style={{ flex: total - completed }} />
        </View>
      </View>
    )
  }
}
