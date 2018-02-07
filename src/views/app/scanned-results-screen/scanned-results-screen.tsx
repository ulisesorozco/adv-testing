import * as React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import Result from './scanned-results-screen.item'
import * as screenStyles from './scanned-results-screen.styles'

export interface ScannedResultsScreenProps extends NavigationScreenProps<{}> {}

export class ScannedResultsScreen extends React.Component<ScannedResultsScreenProps, {}> {
  goTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.navBar}>
          <Text preset="title" text="Results" />
        </View>
        <View style={screenStyles.content}>
          <View style={screenStyles.boderLine}>
            <Text text="SATs" />
          </View>
          <Result score={1400} name="MARK SANCHEZ" onPress={() => this.goTo('testResults')} />
          <View style={screenStyles.boderLine}>
            <Text text="ACTs" />
          </View>
          <Result score={34} name="MARK SANCHEZ" onPress={() => this.goTo('testResults')} />
          <Result score={28} name="MARK SANCHEZ" onPress={() => this.goTo('testResults')} />
          <Result score={15} name="MARK SANCHEZ" onPress={() => this.goTo('testResults')} />
        </View>
        <View style={screenStyles.footer}>
          <Button text="CREATE NEW TEST" style={screenStyles.submitButton} stretch />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsDetailsScreen.header'),
  })
}
