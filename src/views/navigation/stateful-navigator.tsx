import * as React from 'react'
import { BackHandler, View, ViewStyle } from 'react-native'
import { inject, observer } from 'mobx-react'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { any, isNil } from 'ramda'

import { RootNavigator } from './root-navigator'
import { NavigationStore } from './navigation-store'
import { BannerNavigator, ModalNavigator } from '../modal'
import { color } from '../theme'

const ROOT: ViewStyle = { flex: 1, backgroundColor: color.background }

interface StatefulNavigatorProps {
  navigationStore?: NavigationStore
}

@inject('navigationStore')
@inject('modalStore')
@observer
export class StatefulNavigator extends React.Component<StatefulNavigatorProps, {}> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  getCurrentRouteFromState(navState) {
    const route = navState.routes[navState.index]
    if (route.routes) {
      return this.getCurrentRouteFromState(route)
    }
    return route
  }

  handleBackPress = () => {
    const exitRoutes = ['login']
    const routeName = this.getCurrentRouteFromState(this.props.navigationStore.state).routeName
    const exitable = any(route => route === routeName, exitRoutes)
    if (exitable) return false

    this.props.navigationStore.dispatch(NavigationActions.back())
    return true
  }

  render() {
    const rootnavigation = addNavigationHelpers({
      dispatch: this.props.navigationStore.dispatch,
      state: this.props.navigationStore.state,
    })

    return (
      <View style={ROOT}>
        <RootNavigator navigation={rootnavigation} />
        <ModalNavigator />
        <BannerNavigator />
      </View>
    )
  }
}
