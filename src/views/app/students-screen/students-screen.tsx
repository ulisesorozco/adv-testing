import * as React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { SearchBox } from '../../shared/search-box'
import Student from './students-screen.student'
import * as screenStyles from './students-screen.styles'

export interface StudentsScreenProps extends NavigationScreenProps<{}> {}

export class StudentsScreen extends React.Component<StudentsScreenProps, {}> {
  toDetails = () => {
    this.props.navigation.navigate('studentDetails')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <SearchBox onChangeText={e => console.log(e)} />
        <View style={screenStyles.boderLine}>
          <Text text="A" />
        </View>
        <Student name="Steven Alexander" toDetails={this.toDetails} />
        <Student name="Lebeca Axelrod" toDetails={this.toDetails} />

        <View style={screenStyles.boderLine}>
          <Text text="L" />
        </View>
        <Student name="Ashely Bower" toDetails={this.toDetails} />
        <Student name="Andrew Bunsen" toDetails={this.toDetails} />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="graduation-cap" size={25} color={tintColor} />,
  })
}
