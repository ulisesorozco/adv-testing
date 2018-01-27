import * as React from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
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
  toAppScreens = () => {
    this.props.navigation.navigate('appStack')
  }

  render() {
    const { loginStore } = this.props
    const { isLoggingIn } = loginStore

    return (
      <KeyboardAvoidingView
        style={screenStyles.ROOT}
        contentContainerStyle={screenStyles.container}
        behavior="position"
      >
        <View style={screenStyles.logoContainer}>
          <Image source={images.atLogo} style={screenStyles.logo} />
        </View>
        <View style={screenStyles.inputContainer}>
          <ScrollableTabView style={screenStyles.inputContent}>
            <View tabLabel="LOG IN" style={screenStyles.loginContent}>
              <TextField
                value={''}
                labelTx="common.username"
                placeholderTx="common.usernamePlaceholder"
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
                labelTx="common.password"
                placeholderTx="common.passwordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <Button tx="loginScreen.login" stretch onPress={this.toAppScreens} />
            </View>
            <View tabLabel="SIGN UP" style={screenStyles.signupContent}>
              <TextField
                value={''}
                labelTx="common.username"
                placeholderTx="common.usernamePlaceholder"
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
                labelTx="common.password"
                placeholderTx="common.passwordPlaceholder"
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
                labelTx="common.confirmPassword"
                placeholderTx="common.confirmPasswordPlaceholder"
                onChangeText={e => {}}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={() => {}}
              />
              <Button tx="loginScreen.register" style={screenStyles.signupButton} stretch />
            </View>
          </ScrollableTabView>
        </View>
        <KeyboardSpacer />
      </KeyboardAvoidingView>
    )
  }
}
