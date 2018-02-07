import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './scan-screen.styles'

interface StudentProps {
  name?: string
  test?: string
  completed?: number
  total?: number
}

export default class Student extends React.Component<StudentProps, {}> {
  public static defaultProps: Partial<StudentProps> = {
    name: '',
    test: 'Test',
    completed: 0,
    total: 0,
  }

  render() {
    const { name, test, completed, total } = this.props
    const done = completed === total
    const textColor = { color: done ? 'white' : 'black' }

    return (
      <View
        style={{
          ...screenStyles.studentItem,
          backgroundColor: done ? color.right : 'white',
        }}
      >
        <Icon name="check" size={20} color={'white'} />
        <View style={screenStyles.studentText}>
          <Text preset="secondary" style={textColor} text={name} />
          <Text preset="secondary" style={textColor} text={test} />
        </View>
        <Text preset="secondary" style={textColor} text={`${completed} of ${total}`} />
      </View>
    )
  }
}
