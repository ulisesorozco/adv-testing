import * as React from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { inject, observer } from 'mobx-react'
import { isEmpty } from 'ramda'
import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field/index'
import { LoginStore } from '../../../models/login-store'
import { UserStore } from '../../../models/user-store'
import { ExamStore } from '../../../models/exam-store'
import { KeyboardSpacer } from '../../shared/keyboard-spacer/keyboard-spacer'
import { images } from '../../theme/images'
import * as screenStyles from './login-screen.styles'

export interface LoginScreenProps extends NavigationScreenProps<{}> {
  loginStore: LoginStore
  userStore: UserStore
  examStore: ExamStore
}

export interface LoginScreenState {
  email: string
  password: string
  passwordConfirmed: string
  firstname: string
  lastname: string
  instructor_id: number
}

@inject('loginStore')
@inject('userStore')
@inject('examStore')
@observer
export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmed: '',
      firstname: '',
      lastname: '',
      instructor_id: 1,
    }
  }

  async componentDidMount() {
    // const { token } = this.props.loginStore
    const { users, getAllUsers } = this.props.userStore
    const { getAllExams, getExamTypes } = this.props.examStore
    await getAllUsers()
    await getAllExams()
    await getExamTypes()
    if (users.length > 0) {
      this.props.navigation.navigate('appStack')
    }
    // if (!isEmpty(token)) {
    // this.props.navigation.navigate('appStack')
    // }
  }

  login = async () => {
    const { email, password } = this.state
    const payload = {
      account_type: 'instructor',
      email,
      password,
    }
    const ok = await this.props.loginStore.login(payload)
    if (ok) {
      this.props.navigation.navigate('appStack')
    }
  }

  register = async () => {
    const { firstname, lastname, email, password, instructor_id } = this.state
    const payload = {
      firstname,
      lastname,
      email,
      password,
      // instructor_id, // For students
      register_code: 'superman.lives.99', // For instructors
    }
    const ok = await this.props.loginStore.register(payload)

    if (ok) {
      this.props.navigation.navigate('appStack')
    }
  }

  render() {
    const { loginStore } = this.props
    const { isLoggingIn } = loginStore
    const { firstname, lastname, email, password } = this.state

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
                value={email}
                labelTx="common.email"
                onChangeText={e => this.setState({ email: e })}
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
                value={password}
                labelTx="common.password"
                onChangeText={e => this.setState({ password: e })}
                secureTextEntry
                editable={!isLoggingIn}
                style={screenStyles.inputTextField}
                inputStyle={screenStyles.inputText}
                returnKeyType="go"
                onSubmitEditing={e => {}}
              />
              <View style={screenStyles.container} />
              <Button tx="loginScreen.login" onPress={this.login} stretch />
            </View>
            <View tabLabel="SIGN UP" style={screenStyles.signupContent}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <TextField
                    value={email}
                    labelTx="common.email"
                    onChangeText={e => this.setState({ email: e })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isLoggingIn}
                    style={screenStyles.inputTextField}
                    inputStyle={screenStyles.inputText}
                    returnKeyType="next"
                    onSubmitEditing={() => {}}
                    blurOnSubmit={false}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <TextField
                    value={firstname}
                    labelTx="common.firstName"
                    onChangeText={e => this.setState({ firstname: e })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isLoggingIn}
                    style={screenStyles.inputTextField}
                    inputStyle={screenStyles.inputText}
                    returnKeyType="next"
                    onSubmitEditing={() => {}}
                    blurOnSubmit={false}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <TextField
                    value={lastname}
                    labelTx="common.lastName"
                    onChangeText={e => this.setState({ lastname: e })}
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isLoggingIn}
                    style={screenStyles.inputTextField}
                    inputStyle={screenStyles.inputText}
                    returnKeyType="next"
                    onSubmitEditing={() => {}}
                    blurOnSubmit={false}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <TextField
                    value={password}
                    labelTx="common.password"
                    onChangeText={e => this.setState({ password: e })}
                    secureTextEntry
                    editable={!isLoggingIn}
                    style={screenStyles.inputTextField}
                    inputStyle={screenStyles.inputText}
                    returnKeyType="go"
                    onSubmitEditing={() => {}}
                  />
                </View>
              </View>
              <Button
                tx="loginScreen.register"
                stretch
                style={screenStyles.signupButton}
                onPress={this.register}
              />
            </View>
          </ScrollableTabView>
        </View>
        <KeyboardSpacer />
      </KeyboardAvoidingView>
    )
  }
}
