import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/FontAwesome'
import { translate } from '../../../i18n'
import { Text } from '../../shared/text'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import { KeyboardSpacer } from '../../shared/keyboard-spacer'
import TestCase from './settings-screen.check'

import * as screenStyles from './settings-screen.styles'

export interface SettingsScreenProps extends NavigationScreenProps<{}> {}

export class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  render() {
    const isSaving: boolean = false

    return (
      <ScrollView style={screenStyles.ROOT}>
        <View>
          <Text preset="bold" tx={'settingsScreen.header'} style={screenStyles.header} />
        </View>
        <View style={screenStyles.inputContainer}>
          <ScrollableTabView style={screenStyles.inputContent}>
            <View tabLabel="Update Credentials" style={screenStyles.container}>
              <TextField
                value={''}
                labelTx="common.username"
                placeholderTx="common.usernamePlaceholder"
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
              <Button tx="settingsScreen.updateUsername" stretch onPress={() => {}} />
              <TextField
                value={''}
                labelTx="common.newPassword"
                placeholderTx="common.newPasswordPlaceholder"
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
                placeholderTx="common.confirmPasswordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isSaving}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <Button tx="settingsScreen.updatePassword" stretch onPress={() => {}} />
            </View>
            <View tabLabel="Manage Tests" style={screenStyles.container}>
              <View style={screenStyles.boderLine}>
                <Text text="A" />
              </View>
              <TestCase text="ACT - V1" />
              <TestCase checked text="ACT - V2" />

              <View style={screenStyles.boderLine}>
                <Text text="L" />
              </View>
              <TestCase text="LAST - V1" />
              <TestCase checked text="LAST - V2" />
            </View>
          </ScrollableTabView>
        </View>
        <KeyboardSpacer offset={50} />
      </ScrollView>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: translate('settingsScreen.header'),
    tabBarIcon: ({ tintColor }) => <Icon name="gear" size={25} color={tintColor} />,
  })
}
