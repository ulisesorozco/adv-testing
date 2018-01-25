import * as React from 'react'
import { KeyboardAvoidingView, View, ScrollView, Image } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { inject, observer } from 'mobx-react'

import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field/index'
import { LoginStore } from '../../../models/login-store'
import { KeyboardSpacer } from '../../shared/keyboard-spacer/keyboard-spacer'
import { images } from '../../theme/images'
import * as screenStyles from './login-screen.styles'

export interface LoginScreenProps extends NavigationScreenProps<{}> {
  loginStore: LoginStore
}

@inject('loginStore')
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  /* Ref Field */
  passwordField = null

  render() {
    const { loginStore } = this.props
    const { isLoggingIn } = loginStore

    return (
      <ScrollView
        style={screenStyles.ROOT}
        contentContainerStyle={screenStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={screenStyles.logoContainer}>
          <Image source={images.atLogo} style={screenStyles.logo} />
        </View>
        <View style={screenStyles.inputContainer}>
          <ScrollableTabView style={screenStyles.inputContent}>
            <View tabLabel="LOG IN" style={screenStyles.loginContent}>
              <TextField
                value={''}
                labelTx="loginScreen.username"
                placeholderTx="loginScreen.usernamePlaceholder"
                onChangeText={e => {}}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="next"
                onSubmitEditing={() => {}}
                blurOnSubmit={false}
              />
              <TextField
                value={''}
                labelTx="loginScreen.password"
                placeholderTx="loginScreen.passwordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <Button tx="loginScreen.login" stretch />
            </View>
            <View tabLabel="SIGN UP" style={screenStyles.signupContent}>
              <TextField
                value={''}
                labelTx="loginScreen.username"
                placeholderTx="loginScreen.usernamePlaceholder"
                onChangeText={e => {}}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="next"
                onSubmitEditing={() => {}}
                blurOnSubmit={false}
              />
              <TextField
                value={''}
                labelTx="loginScreen.password"
                placeholderTx="loginScreen.passwordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={() => {}}
              />
              <TextField
                value={''}
                labelTx="loginScreen.confirmPassword"
                placeholderTx="loginScreen.confirmPasswordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={() => {}}
              />
            </View>
          </ScrollableTabView>
        </View>
        <KeyboardSpacer />
      </ScrollView>
    )
  }
}
