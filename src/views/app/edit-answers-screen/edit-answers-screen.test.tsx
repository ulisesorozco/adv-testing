import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'
import Collapsible from 'react-native-collapsible'

import * as screenStyles from './edit-answers-screen.styles'

export type Answer = {
  answer: string
  submitted: string,
}

export type Test = {
  title: string
  answers: Array<Answer>,
}

interface TestAnswerProps {
  test: Test
}

interface TestAnswerState {
  isCollapsed: boolean
  title: string
}

export default class TestAnswer extends React.Component<TestAnswerProps, TestAnswerState> {
  state = {
    isCollapsed: true,
    title: 'Act v2',
  }

  open = () => {
    this.setState({
      isCollapsed: false,
    })
  }

  toggle = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    })
  }

  _renderContent(answers: Array<Answer>) {
    return (
      <View style={screenStyles.sectionBody}>
        <View style={screenStyles.testItem}>
          <View style={screenStyles.testNumber} />
          <View style={screenStyles.testStatus} />
          <View style={screenStyles.testAnswer}>
            <Text text="Answer" style={{ textAlign: 'center' }} />
          </View>
          <View style={screenStyles.testAnswerSubmitted}>
            <Text text="Submitted" style={{ textAlign: 'center' }} />
          </View>
          <View style={screenStyles.testAnswerEdit} />
        </View>
        {answers.map((answer, index) => {
          const isCorrect = answer.answer === answer.submitted
          const iconName = isCorrect ? 'check' : 'times'
          // const iconStyle = isCorrect ? screenStyles.borderRight : screenStyles.borderWrong
          const iconColor = isCorrect ? color.right : color.wrong

          return (
            <View key={Math.random()} style={screenStyles.testItem}>
              <View style={screenStyles.testNumber}>
                <Text text={`${index + 1}`} style={{ textAlign: 'center' }} />
              </View>
              <View style={screenStyles.testStatus}>
                <Icon name={iconName} size={20} style={{ alignSelf: 'center' }} color={iconColor} />
              </View>
              <View style={screenStyles.testAnswer}>
                <Text text={answer.answer} style={{ textAlign: 'center' }} />
              </View>
              <View style={screenStyles.testAnswerSubmitted}>
                <Text text={answer.submitted} style={{ textAlign: 'center' }} />
              </View>
              <View style={screenStyles.testAnswerEdit}>
                <Icon
                  name="pencil-square-o"
                  size={20}
                  style={{ alignSelf: 'flex-end' }}
                  color={color.palette.darkGreen}
                />
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  render() {
    const { test } = this.props
    const { title, answers } = test
    const { isCollapsed } = this.state
    const caret = isCollapsed ? 'caret-down' : 'caret-up'

    return (
      <TouchableOpacity onPress={this.open}>
        <Collapsible collapsed={isCollapsed} collapsedHeight={50}>
          <TouchableOpacity style={screenStyles.sectionHeader} onPress={this.toggle}>
            <View>
              <Text preset="bold" text={title} />
            </View>
            <View style={screenStyles.sectinHeaderCollapse}>
              <Icon name={caret} size={20} color={color.palette.darkGreen} />
            </View>
          </TouchableOpacity>
          {this._renderContent(answers)}
        </Collapsible>
      </TouchableOpacity>
    )
  }
}
