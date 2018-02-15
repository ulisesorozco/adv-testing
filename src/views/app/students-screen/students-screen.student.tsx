import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'
import { translate } from '../../../i18n'

import * as screenStyles from './students-screen.styles'

interface StudentItemProps {
  student: any
  toDetails: () => void
}

export default class StudentItem extends React.Component<StudentItemProps, {}> {
  toDetails = () => {
    this.props.toDetails()
  }

  render() {
    const { student } = this.props

    return (
      <TouchableOpacity style={screenStyles.studentItem} onPress={this.toDetails}>
        <View>
          <Text preset="bold" text={student.firstname + ' ' + student.lastname} />
        </View>
        <View style={screenStyles.studentFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
