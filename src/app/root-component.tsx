import '../i18n'
import * as React from 'react'
import { Preloader } from '../views/preloader'
import { setupEnvironment } from './setup/setup-environment'
import { setupNavigationStore } from './setup/setup-navigation-store'
import { setupRootStore } from './setup/setup-root-store'
import { NavigationStore } from '../views/navigation'
import { RootStore } from '../models/root-store'
import { Provider } from 'mobx-react'
import { StatefulNavigator } from '../views/navigation'

interface State {
  store?: RootStore
  navigationStore?: NavigationStore
  ready: boolean
}

export class RootComponent extends React.Component<{}, State> {
  /**
   * Initial state.
   */
  state: State = { ready: false }

  /**
   * When the component is mounted.
   */
  async componentDidMount() {
    const env = await setupEnvironment()
    const navigationStore = await setupNavigationStore(env)
    const store = await setupRootStore(env)
    this.setState({ ready: true, navigationStore, store })
  }

  render() {
    const { ready, store, navigationStore } = this.state
    if (!ready) {
      return <Preloader />
    }
    // Places the store models you'd like to make available to your components in here.
    const injectableStores = {
      loginStore: store.loginStore,
      modalStore: store.modalStore,
      instructorStore: store.instructorStore,
      studentStore: store.studentStore,
      examStore: store.examStore,
    }

    return (
      <Provider navigationStore={navigationStore} {...injectableStores}>
        <StatefulNavigator />
      </Provider>
    )
  }
}
