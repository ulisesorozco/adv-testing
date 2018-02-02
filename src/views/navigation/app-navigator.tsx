import { StackNavigator, TabNavigator, NavigationRouteConfig, TabBarBottom } from 'react-navigation'
import { commonStyles } from '../theme'
/**
 * Import screens
 */
import { ScanScreen } from '../app/scan-screen'
import { SettingsScreen } from '../app/settings-screen'
import { StudentsScreen } from '../app/students-screen'
import { StudentDetailsScreen } from '../app/student-details-screen'
import { EditAnswersScreen } from '../app/edit-answers-screen'
import { ManageScheduledTestScreen } from '../app/manage-scheduled-test-screen'
import { EditTestScreen } from '../app/edit-test-screen'

const scan: NavigationRouteConfig<any> = {
  screen: ScanScreen,
}

const settings: NavigationRouteConfig<any> = {
  screen: SettingsScreen,
}

const students: NavigationRouteConfig<any> = {
  screen: StudentsScreen,
}

const studentDetails: NavigationRouteConfig<any> = {
  screen: StudentDetailsScreen,
}

const editAnswers: NavigationRouteConfig<any> = {
  screen: EditAnswersScreen,
}

const manageTests: NavigationRouteConfig<any> = {
  screen: ManageScheduledTestScreen,
}

const editTest: NavigationRouteConfig<any> = {
  screen: EditTestScreen,
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
  editAnswers,
  appMainTab,
  studentDetails,
  manageTests,
  editTest,
}

export const AppNavigator = StackNavigator(routes, {
  headerMode: 'none',
  initialRouteName: 'appMainTab',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
