import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalDropdown from 'react-native-modal-dropdown'
import { toUpper } from 'ramda'
import { Text } from '../../shared/text'
import * as screenStyles from './edit-answers-screen.styles'

export interface RowProps {
  answer: any
  iconName: string
  iconColor: string
  index: number
  isEditing: boolean
}

export interface RowState {}

export class Row extends React.Component<RowProps, RowState> {
  dropdown: any

  render() {
    const { answer, iconName, iconColor, index, isEditing } = this.props

    return (
      <View key={Math.random()} style={screenStyles.testItem}>
        <View style={screenStyles.testNumber}>
          <Text text={`${index + 1}`} style={{ textAlign: 'center' }} />
        </View>
        <View style={screenStyles.testStatus}>
          <Icon name={iconName} size={20} style={{ alignSelf: 'center' }} color={iconColor} />
        </View>
        <View style={screenStyles.testAnswer}>
          <Text
            text={toUpper(answer.correct_answer || 'X')}
            style={{ color: 'black', textAlign: 'center' }}
          />
        </View>
        <View style={screenStyles.testAnswerSubmitted}>
          <Text
            text={toUpper(answer.submitted_answer || 'X')}
            style={{ color: 'black', textAlign: 'center' }}
          />
        </View>
        <TouchableOpacity style={screenStyles.testAnswerEdit} onPress={() => this.dropdown.show()}>
          {isEditing && (
            <ModalDropdown
              defaultValue=""
              ref={e => {
                this.dropdown = e
              }}
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
        </TouchableOpacity>
      </View>
    )
  }
}
