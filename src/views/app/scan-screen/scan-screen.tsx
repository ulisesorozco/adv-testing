import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Student from './scan-screen.student'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import * as screenStyles from './scan-screen.styles'

export interface ScanScreenProps extends NavigationScreenProps<{}> {}

export class ScanScreen extends React.Component<ScanScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  done = () => {
    this.props.navigation.navigate('scoringTest')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.navBar}>
          <Student name="John Smith" test="SAT v2" completed={5} total={5} />
          <Student name="Jessica Jones" test="SAT v2" completed={1} total={5} />
        </View>
        <View style={screenStyles.content}>
          <Text text="scan" />
        </View>
        <View style={screenStyles.footer}>
          <TouchableOpacity onPress={this.back} style={screenStyles.closeButton}>
            <Icon name="times" size={20} color={'white'} />
          </TouchableOpacity>
          <Button stretch text="I'M DONE" style={screenStyles.doneButton} onPress={this.done} />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('scanScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="camera" size={25} color={tintColor} />,
  })
}
