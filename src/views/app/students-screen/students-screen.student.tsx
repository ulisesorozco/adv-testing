import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './students-screen.styles'

interface StudentItemProps {
  name: string
  toDetails(): void
}

export default class StudentItem extends React.Component<StudentItemProps, {}> {
  toDetails = () => {
    this.props.toDetails()
  }

  render() {
    return (
      <TouchableOpacity style={screenStyles.studentItem} onPress={this.toDetails}>
        <View>
          <Text preset="bold" text={this.props.name} />
        </View>
        <View style={screenStyles.studentFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="graduation-cap" size={25} color={tintColor} />,
  })
}
