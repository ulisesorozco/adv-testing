import * as React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Result from './test-results-screen.item'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './test-results-screen.styles'

export interface TestResultsScreenProps extends NavigationScreenProps<{}> {}

export class TestResultsScreen extends React.Component<TestResultsScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  toAnswers = () => {
    this.props.navigation.navigate('editAnswers')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.navBar}>
          <TouchableOpacity onPress={this.back}>
            <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          </TouchableOpacity>
          <View style={screenStyles.navTitle}>
            <Text preset="title" text="ACT v2" />
            <Text text="ID:1234522" />
          </View>
        </View>
        <ScrollView style={screenStyles.content}>
          <Result text="Composite" completed={32} total={36} />
          <View style={screenStyles.divider} />
          <Result text="English" completed={50} total={100} />
          <Result text="Math" completed={32} total={75} />
          <Result text="Science" completed={32} total={40} />
          <Result text="Reading" completed={48} total={60} />
          <Result text="Writing" completed={32} total={60} />
        </ScrollView>
        <View style={screenStyles.Footer}>
          <Button
            stretch
            text="VIEW ANSWERS"
            style={screenStyles.backButton}
            onPress={this.toAnswers}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
