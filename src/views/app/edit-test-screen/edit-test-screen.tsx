import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import * as screenStyles from './edit-test-screen.styles'
import { color } from '../../theme'

export interface EditTestScreenProps extends NavigationScreenProps<{}> {}

export class EditTestScreen extends React.Component<EditTestScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  render() {
    return <View style={screenStyles.ROOT} />
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
