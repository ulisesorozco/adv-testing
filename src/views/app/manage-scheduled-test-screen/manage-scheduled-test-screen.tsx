import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './manage-scheduled-test-screen.styles'

export interface ManageScheduledTestScreenProps extends NavigationScreenProps<{}> {}

export class ManageScheduledTestScreen extends React.Component<ManageScheduledTestScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.top}>
          <View style={screenStyles.navBar}>
            <TouchableOpacity onPress={this.back}>
              <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
            </TouchableOpacity>
            <View style={screenStyles.navTitle}>
              <Text preset="title" text="SAT v2" />
              <Text text="ID:1234522" />
            </View>
          </View>
          <View style={screenStyles.manageContainer}>
            <View style={screenStyles.testType}>
              <Text text="Test Type" />
              <Text preset="bold" text="SAT v2" />
            </View>
            <View style={screenStyles.testDetail}>
              <View>
                <Text text="Test Date" />
                <Text preset="bold" text="12/11/2017" />
              </View>
              <View>
                <Text text="Test Time" />
                <Text preset="bold" text="10:AM EST" />
              </View>
            </View>
            <View style={screenStyles.testButtons}>
              <Button stretch text="EDIT DETAILS" style={screenStyles.editButton} />
              <Button stretch text="CANCEL TEST" style={screenStyles.cancelButton} />
            </View>
          </View>
        </View>
        <View style={screenStyles.space} />
        <View style={screenStyles.footer}>
          <Button
            text="CREATE NEW TEST"
            style={screenStyles.editButton}
            textStyle={screenStyles.submitButton}
            stretch
          />
          <View style={screenStyles.spaceButton} />
          <Button
            text="CREATE NEW TEST"
            style={screenStyles.editButton}
            textStyle={screenStyles.submitButton}
            stretch
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
