import { StackNavigator, NavigationRouteConfig } from 'react-navigation'
import { LoginNavigator } from './login-navigator'

export const routes = {
  loginStack: {
    screen: LoginNavigator,
    navigationOptions: {
      /**
       * @desc hack for hiding Login route in drawer
       * @see https://github.com/react-navigation/react-navigation/issues/795
       */
      drawerLabel: () => null,
    },
  } as NavigationRouteConfig<any>,
}

/**
 * @type {NavigationContainer}
 * @desc initialize global Drawer Navigator.. For DrawerItems customization, please see..
 * @see https://github.com/react-community/react-navigation/blob/master/docs/api/navigators/DrawerNavigator.md#contentoptions-for-draweritems
 */
export const RootNavigator = StackNavigator(routes, {
  initialRouteName: 'loginStack',
  mode: 'card',
  navigationOptions: {},
})
