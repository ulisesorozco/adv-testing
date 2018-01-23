import * as React from 'react'
import { StackNavigator, NavigationRouteConfig } from 'react-navigation'
import { LoginScreen } from '../login/login-screen'

/**
 * @todo initialize types for 'header' from i18n to the view header
 */
const login: NavigationRouteConfig<any> = {
  screen: LoginScreen,
  navigationOptions: {
    title: 'Login',
    header: null,
  },
}

export const routes = {
  login,
}

export const LoginNavigator = StackNavigator(routes, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
