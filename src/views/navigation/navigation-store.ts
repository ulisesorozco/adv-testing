import { types } from 'mobx-state-tree'
import { RootNavigator } from './root-navigator'
import { NavigationActions } from 'react-navigation'

const DEFAULT_STATE = RootNavigator.router.getStateForAction(NavigationActions.init(), null)

/**
 * Tracks the navigation state for `react-navigation` as well as providers
 * the actions for changing that state.
 */
export const NavigationStoreModel = types
  .model('Navigation')
  .props({
    /**
     * the navigation state tree (Frozen here means it is immutable.)
     */
    state: types.optional(types.frozen, DEFAULT_STATE),
  })
  .actions(self => ({
    /**
     * Fires when navigation happens.
     *
     * Our job is to update the state for this new navigation action.
     *
     * @param action The new navigation action to perform
     * @param shouldPush Should we push or replace the whole stack?
     */
    dispatch(action: {}, shouldPush: boolean = true) {
      const previousNavState = shouldPush ? self.state : null
      self.state = RootNavigator.router.getStateForAction(action, previousNavState) || self.state
      return true
    },

    /**
     * Resets the navigation back to the start.
     */
    reset() {
      self.state = DEFAULT_STATE
    },
  }))

export type NavigationStore = typeof NavigationStoreModel.Type
