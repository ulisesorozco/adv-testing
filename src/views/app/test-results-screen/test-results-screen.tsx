import * as React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import { NavigationScreenProps } from 'react-navigation'
import { isNil, isEmpty } from 'ramda'
import Icon from 'react-native-vector-icons/FontAwesome'
import Result from './test-results-screen.item'
import { ExamStore } from '../../../models/exam-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color } from '../../theme'
import * as screenStyles from './test-results-screen.styles'

export interface TestResultsScreenProps extends NavigationScreenProps<{}> {
  examStore: ExamStore
}

export interface TestResultsScreenState {
  exam: any
  results: any
  type: any
}

@inject('examStore')
@observer
export class TestResultsScreen extends React.Component<
  TestResultsScreenProps,
  TestResultsScreenState
> {
  constructor(props) {
    super(props)
    this.state = {
      exam: {},
      results: {},
      type: {},
    }
  }

  componentDidMount() {
    if (this.props.navigation.state.params) {
      const { exam } = this.props.navigation.state.params
      const results = JSON.parse(exam.results)
      const type = this.props.examStore.getType(exam.exam_type_id)
      this.setState({
        exam,
        results,
        type,
      })
    }
  }

  back = () => {
    this.props.navigation.goBack()
  }

  toAnswers = answers => {
    if (isNil(answers)) {
      console.log('-------->>> Never got detail answers')
    } else {
      this.props.navigation.navigate('editAnswers', {
        answers,
      })
    }
  }

  render() {
    const { exam, results, type } = this.state

    if (isEmpty(exam) || isNil(exam)) {
      return <View style={screenStyles.ROOT} />
    }

    return (
      <View style={screenStyles.ROOT}>
        <TouchableOpacity style={screenStyles.navBar} onPress={this.back}>
          <Icon name="caret-left" size={30} color={color.palette.darkGreen} />
          <View style={screenStyles.navTitle}>
            <Text preset="title" text={`${type.exam_type} ${type.exam_version}`} />
            <Text text={`ID: ${exam.id}`} />
          </View>
        </TouchableOpacity>
        <ScrollView style={screenStyles.content}>
          <Result
            text="Composite"
            completed={results.overall_results.composite_score}
            total={results.overall_results.composite_max}
          />
          <View style={screenStyles.divider} />

          {results.overall_results.sections.map(result => (
            <Result
              key={result.exam_section_name}
              text={result.exam_section_name}
              completed={result.correct}
              total={result.total}
            />
          ))}
        </ScrollView>
        <View style={screenStyles.Footer}>
          <Button
            stretch
            text="VIEW ANSWERS"
            style={screenStyles.backButton}
            onPress={() => this.toAnswers(results.detail_answers)}
          />
        </View>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('studentsScreen.header'),
  })
}
