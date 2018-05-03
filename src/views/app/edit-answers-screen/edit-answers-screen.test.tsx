import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalDropdown from 'react-native-modal-dropdown'
import Collapsible from 'react-native-collapsible'
import { Text } from '../../shared/text'
import { color } from '../../theme'
import { Row } from './edit-answers-screen.row'
import * as screenStyles from './edit-answers-screen.styles'

export type Test = {
  title: string
  answers: Array<any>,
}

interface TestAnswerProps {
  test: Test
  isEditing: boolean
}

interface TestAnswerState {
  isCollapsed: boolean
  title: string
}

export default class TestAnswer extends React.Component<TestAnswerProps, TestAnswerState> {
  state = {
    isCollapsed: false,
    title: 'Act v2',
  }

  dropdown: any

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

  _renderContent(answers: Array<any>) {
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
          <View style={screenStyles.testAnswerEdit}>
            {this.props.isEditing && <Text text="Update" style={{ textAlign: 'center' }} />}
          </View>
        </View>
        {answers.map((answer, index) => {
          const isCorrect = answer.correct_answer === answer.submitted_answer
          const iconName = isCorrect ? 'check' : 'times'
          const iconColor = isCorrect ? color.right : color.wrong

          return (
            <Row
              key={`${index}`}
              index={index}
              answer={answer}
              iconName={iconName}
              iconColor={iconColor}
              isEditing={this.props.isEditing}
            />
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
      <TouchableOpacity disabled={!isCollapsed} onPress={this.open}>
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
