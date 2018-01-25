import { StackNavigator, TabNavigator, NavigationRouteConfig, TabBarBottom } from 'react-navigation'
import { commonStyles } from '../theme'
/**
 * Import screens
 */
import { ScanScreen } from '../app/scan-screen'
import { SettingsScreen } from '../app/settings-screen'
import { StudentsScreen } from '../app/students-screen'

const scan: NavigationRouteConfig<any> = {
  screen: ScanScreen,
}

const settings: NavigationRouteConfig<any> = {
  screen: SettingsScreen,
}

const students: NavigationRouteConfig<any> = {
  screen: StudentsScreen,
}
const tabs = {
  students,
  scan,
  settings,
}

/** Tabbar which contains dialogue list and contact list */
const AppMainTabScreen = TabNavigator(tabs, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    style: commonStyles.tabBar,
    labelStyle: commonStyles.tabBarLabel,
  },
})

const appMainTab: NavigationRouteConfig<any> = {
  screen: AppMainTabScreen,
  navigationOptions: {},
}

const routes = {
  appMainTab,
}

export const AppNavigator = StackNavigator(routes, {
  headerMode: 'none',
  initialRouteName: 'appMainTab',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
