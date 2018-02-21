import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalDropdown from 'react-native-modal-dropdown'
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
          <View style={screenStyles.testAnswerEdit}>
            {this.props.isEditing && <Text text="Update" style={{ textAlign: 'center' }} />}
          </View>
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
                <Text text={answer.answer} style={{ color: 'black', textAlign: 'center' }} />
              </View>
              <View style={screenStyles.testAnswerSubmitted}>
                <Text text={answer.submitted} style={{ color: 'black', textAlign: 'center' }} />
              </View>
              <View style={screenStyles.testAnswerEdit}>
                {this.props.isEditing && (
                  <ModalDropdown
                    defaultValue=""
                    options={['A', 'B', 'C']}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgb(203,208,223)',
                      marginLeft: 20,
                      marginTop: -5,
                      width: 60,
                      height: 30,
                    }}
                    textStyle={{
                      fontSize: 16,
                      textAlign: 'center',
                      paddingTop: 5,
                    }}
                    dropdownStyle={{ height: 120 }}
                    dropdownTextStyle={{ fontSize: 16 }}
                  />
                )}
                {this.props.isEditing && (
                  <View style={{ position: 'absolute', right: 20 }}>
                    <Icon name="caret-down" size={18} color="rgb(203,208,223)" />
                  </View>
                )}
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
