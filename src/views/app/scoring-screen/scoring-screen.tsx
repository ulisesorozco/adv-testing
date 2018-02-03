import * as React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import * as screenStyles from './scoring-screen.styles'

export interface ScoringScreenProps extends NavigationScreenProps<{}> {}

export class ScoringScreen extends React.Component<ScoringScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('scannedResults')
    }, 2000)
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Text style={screenStyles.header} text="SCORING TEST" />
        <Text style={screenStyles.loading} text="Just a min..." />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
