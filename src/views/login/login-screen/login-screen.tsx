import * as React from 'react'
import { View, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { inject, observer } from 'mobx-react'

import { Text } from '../../shared/text'
import { Button } from '../../shared/button'
import { color, spacing } from '../../theme'
import { TextField } from '../../shared/text-field/index'
import { LoginStore } from '../../../models/login-store'
import { KeyboardSpacer } from '../../shared/keyboard-spacer/keyboard-spacer'
import * as screenStyles from './login-screen.styles'

export interface LoginScreenProps extends NavigationScreenProps<{}> {
  loginStore: LoginStore
}

@inject('loginStore')
@observer
export class LoginScreen extends React.Component<LoginScreenProps, {}> {
  render() {
    const { loginStore } = this.props
    const showError = Boolean(loginStore.errorMessage)

    return (
      <ScrollView
        style={screenStyles.ROOT}
        contentContainerStyle={{ paddingTop: spacing[3] }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ paddingHorizontal: spacing[3] }} />
        <KeyboardSpacer offset={50} />
      </ScrollView>
    )
  }
}
