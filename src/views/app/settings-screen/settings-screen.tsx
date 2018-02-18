import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import { SearchBox } from '../../shared/search-box'
import { KeyboardSpacer } from '../../shared/keyboard-spacer'
import { CheckBox } from './settings-screen.check'
import * as screenStyles from './settings-screen.styles'

export interface SettingsScreenProps extends NavigationScreenProps<{}> {}

export class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  render() {
    const isSaving: boolean = false

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
            <ScrollView tabLabel="Manage Tests" style={screenStyles.container}>
              <SearchBox onChangeText={e => console.log(e)} />
              <View style={screenStyles.boderLine}>
                <Text text="A" />
              </View>
              <Button
                preset="secondary"
                text="ACT - V1"
                stretch
                renderRight={<CheckBox />}
                style={screenStyles.testButton}
              />
              <Button
                preset="secondary"
                text="ACT - V2"
                stretch
                renderRight={<CheckBox checked />}
                style={screenStyles.testButton}
              />

              <View style={screenStyles.boderLine}>
                <Text text="L" />
              </View>
              <Button
                preset="secondary"
                text="LAST - V1"
                stretch
                renderRight={<CheckBox />}
                style={screenStyles.testButton}
              />
              <Button
                preset="secondary"
                text="LAST - V2"
                stretch
                renderRight={<CheckBox />}
                style={screenStyles.testButton}
              />
              <View style={{ height: 50 }} />
            </ScrollView>
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
