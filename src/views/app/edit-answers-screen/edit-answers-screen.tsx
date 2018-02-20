import * as React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Button } from '../../shared/button'
import { Text } from '../../shared/text'
import TestAnswer, { Test } from './edit-answers-screen.test'
import * as screenStyles from './edit-answers-screen.styles'
import { color } from '../../theme'

const TESTS: Array<Test> = [
  {
    title: 'English',
    answers: [
      {
        answer: 'A',
        submitted: 'B',
      },
      {
        answer: 'C',
        submitted: 'B',
      },
      {
        answer: 'D',
        submitted: 'D',
      },
      {
        answer: 'A',
        submitted: 'C',
      },
    ],
  },
  {
    title: 'Math',
    answers: [
      {
        answer: 'A',
        submitted: 'B',
      },
      {
        answer: 'C',
        submitted: 'B',
      },
      {
        answer: 'D',
        submitted: 'D',
      },
      {
        answer: 'A',
        submitted: 'C',
      },
    ],
  },
]

export interface EditAnswersScreenProps extends NavigationScreenProps<{}> {}

export class EditAnswersScreen extends React.Component<EditAnswersScreenProps, {}> {
  back = () => {
    this.props.navigation.goBack()
  }

  toEdits = () => {}

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity style={screenStyles.navBar} onPress={this.back}>
          <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          <Text preset="title" text="    ACT v2" />
        </TouchableOpacity>
        <ScrollView style={screenStyles.answerContainer}>
          {TESTS.map(test => <TestAnswer key={Math.random()} test={test} />)}
        </ScrollView>
        <View style={screenStyles.footer}>
          <Button
            stretch
            text="EDIT RESULTS"
            style={screenStyles.backButton}
            onPress={this.toEdits}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
