import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'
import { startsWith, toLower, toUpper } from 'ramda'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { ExamStore } from '../../../models/exam-store'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import { SearchBox } from '../../shared/search-box'
import { KeyboardSpacer } from '../../shared/keyboard-spacer'
import { CheckBox } from './settings-screen.check'
import * as screenStyles from './settings-screen.styles'

export interface SettingsScreenProps extends NavigationScreenProps<{}> {
  examStore: ExamStore
}

export interface SettingsScreenState {
  selectedTest: string
  search: string
  visible: Array<boolean>
}

@inject('examStore')
export class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      selectedTest: null,
      visible: [],
    }
  }

  componentDidMount() {
    this.initialize()
  }

  initialize() {
    const { filters } = this.props.examStore
    const visible = []

    filters.forEach(filter => {
      visible.push(true)
    })
    this.setState({ visible })
  }

  onExams = (value: string) => {
    const { filters, exams } = this.props.examStore
    const { visible } = this.state
    this.initialize()
    filters.forEach((filter, index) => {
      visible[index] = false
      exams.map((exam, idx) => {
        if (
          startsWith(filter, toLower(exam.title)) &&
          toLower(exam.title).includes(toLower(value))
        ) {
          visible[index] = true
        }
      })
    })
    this.setState({ search: toLower(value), visible })
  }

  onSelect = test => {
    const { setCurrentExam } = this.props.examStore

    this.setState({ selectedTest: test.id })
    setCurrentExam(test)
  }

  render() {
    const isSaving: boolean = false
    const { filters, exams } = this.props.examStore
    const { search, selectedTest, visible } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <View>
          <Text preset="title" tx={'settingsScreen.header'} style={screenStyles.header} />
        </View>
        <View style={screenStyles.inputContainer}>
          <ScrollableTabView style={screenStyles.inputContent}>
            <ScrollView tabLabel="Update Credentials" style={screenStyles.container}>
              <TextField
                value={''}
                labelTx="common.username"
                onChangeText={e => {}}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isSaving}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="next"
                onSubmitEditing={() => {}}
                blurOnSubmit={false}
              />
              <Button
                tx="settingsScreen.updateUsername"
                style={screenStyles.button}
                onPress={() => {}}
                stretch
              />
              <TextField
                value={''}
                labelTx="common.newPassword"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isSaving}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <TextField
                value={''}
                labelTx="common.confirmPassword"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isSaving}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <Button
                tx="settingsScreen.updatePassword"
                style={screenStyles.button}
                onPress={() => {}}
                stretch
              />
            </ScrollView>
            <View tabLabel="Manage Tests">
              <SearchBox onChangeText={e => this.onExams(e)} />
              <ScrollView keyboardShouldPersistTaps="handled">
                {filters.map((filter, index) => (
                  <View key={`block${index}`}>
                    {visible[index] && (
                      <View key={`ft-${index}`} style={screenStyles.boderLine}>
                        <Text text={toUpper(filter)} />
                      </View>
                    )}
                    {exams.map((exam, idx) => {
                      if (
                        startsWith(filter, toLower(exam.title)) &&
                        toLower(exam.title).includes(toLower(search))
                      ) {
                        return (
                          <Button
                            key={`${index}-${idx}`}
                            preset="secondary"
                            text={exam.title}
                            stretch
                            renderRight={<CheckBox checked={selectedTest === exam.id} />}
                            style={screenStyles.testButton}
                            onPress={() => this.onSelect(exam)}
                          />
                        )
                      }
                      return null
                    })}
                  </View>
                ))}
              </ScrollView>
              <View style={{ height: 50 }} />
            </View>
          </ScrollableTabView>
        </View>
        <KeyboardSpacer />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('settingsScreen.header'),
  })
}
