import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import Scheduled from './student-details-screen.scheduled'
import Completed from './student-details-screen.completed'
import * as screenStyles from './student-details-screen.styles'

export interface StudentDetailsScreenProps extends NavigationScreenProps<{}> {}

export class StudentDetailsScreen extends React.Component<StudentDetailsScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.navBar}>
          <TouchableOpacity onPress={this.back}>
            <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          </TouchableOpacity>
          <Text preset="title" text="   ASHLEY BOWER" />
        </View>
        <View style={screenStyles.boderLine}>
          <Text text="Scheduled Tests" />
        </View>
        <View>
          <Scheduled onPress={() => this.props.navigation.navigate('manageTests')} />
        </View>
        <View style={screenStyles.boderLine}>
          <Text text="Completed Tests" />
        </View>
        <View>
          <Completed text="1200" />
        </View>
        <Button text="CREATE NEW TEST" style={screenStyles.submitButton} stretch />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
