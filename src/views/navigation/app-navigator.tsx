import { StackNavigator, TabNavigator, NavigationRouteConfig } from 'react-navigation'
import { commonStyles } from '../theme'
/**
 * Import screens
 */
import { ScanScreen } from '../app/scan-screen'
import { ScoringScreen } from '../app/scoring-screen'
import { ScannedResultsScreen } from '../app/scanned-results-screen'
import { SettingsScreen } from '../app/settings-screen'
import { StudentsScreen } from '../app/students-screen'
import { StudentDetailsScreen } from '../app/student-details-screen'
import { EditAnswersScreen } from '../app/edit-answers-screen'
import { ManageScheduledTestScreen } from '../app/manage-scheduled-test-screen'
import { EditScheduledTestScreen } from '../app/edit-scheduled-test-screen'
import { TestResultsScreen } from '../app/test-results-screen'
import { PrintScreen } from '../app/print-screen'
import { TXTabBar } from './tab-bar'

const scan: NavigationRouteConfig<any> = {
  screen: ScanScreen,
}

const scoringTest: NavigationRouteConfig<any> = {
  screen: ScoringScreen,
}

const scannedResults: NavigationRouteConfig<any> = {
  screen: ScannedResultsScreen,
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

const editScheduledTest: NavigationRouteConfig<any> = {
  screen: EditScheduledTestScreen,
}

const testResults: NavigationRouteConfig<any> = {
  screen: TestResultsScreen,
}

const print: NavigationRouteConfig<any> = {
  screen: PrintScreen,
}

const tabs = {
  students,
  scan,
  settings,
}

/** Tabbar which contains dialogue list and contact list */
const AppMainTabScreen = TabNavigator(tabs, {
  tabBarComponent: TXTabBar,
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
  editScheduledTest,
  testResults,
  scoringTest,
  scannedResults,
  print,
}

export const AppNavigator = StackNavigator(routes, {
  headerMode: 'none',
  initialRouteName: 'appMainTab',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
