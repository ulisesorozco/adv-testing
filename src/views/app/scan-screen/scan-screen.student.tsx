import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './scan-screen.styles'

interface StudentProps {
  name?: string
  test?: string
  completed?: number
  total?: number
  onRemoveStudent?: () => void
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
    const done = completed >= total
    const textColor = { color: done ? 'white' : 'black' }

    return (
      <View
        style={{
          ...screenStyles.studentItem,
          backgroundColor: done ? color.right : 'white',
        }}
      >
        {done && (
          <View style={{ marginLeft: 10 }}>
            <Icon name="check" size={20} color="white" />
          </View>
        )}
        <View style={screenStyles.studentText}>
          <Text preset="secondaryBold" style={textColor} text={name} />
          <View style={screenStyles.studentLine}>
            <Text preset="secondary" style={textColor} text={test} />
            <Text preset="secondary" style={textColor} text={' | '} />
            <Text preset="secondary" style={textColor} text={`${completed} of ${total}`} />
          </View>
        </View>
        {!done && (
          <TouchableOpacity
            style={screenStyles.studentRemove}
            onPress={() => this.props.onRemoveStudent()}
          >
            <Icon name="times" size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
    )
  }
}
