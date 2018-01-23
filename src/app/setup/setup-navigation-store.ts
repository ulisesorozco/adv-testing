import { onSnapshot, onAction } from 'mobx-state-tree'
import { NavigationStoreModel } from '../../views/navigation/navigation-store'
import { Environment } from '../../models/environment'

const NAVIGATION_STATE_STORAGE_KEY = 'navigation'

/**
 * Setup the `react-navigation` state.
 */
export async function setupNavigationStore(env: Environment) {
  // load data from storage
  let data: any = (await env.storage.load(NAVIGATION_STATE_STORAGE_KEY)) || {}

  data = {}
  // create state passing along dependencies
  const navState = NavigationStoreModel.create(data, { env })

  // track changes & save to storage
  onSnapshot(navState, snapshot => {
    env.storage.save(NAVIGATION_STATE_STORAGE_KEY, snapshot)
  })

  return navState
}
