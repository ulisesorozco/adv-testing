import { onSnapshot, onAction } from 'mobx-state-tree'
import I18n from 'react-native-i18n'
import { isNil } from 'ramda'
import { RootStoreModel } from '../../models/root-store'
import { Environment } from '../../models/environment'

const ROOT_STORAGE_KEY = 'root'
const LOCALE_STORAGE_KEY = 'locale'

/**
 * Setup the root state.
 */
export async function setupRootStore(env: Environment) {
  const language: any = await env.storage.load(LOCALE_STORAGE_KEY)

  if (!isNil(language)) {
    I18n.locale = language.locale
  }

  // load data from storage
  let data: any = (await env.storage.load(ROOT_STORAGE_KEY)) || {}

  // create state passing along dependencies
  const rootState = RootStoreModel.create(data, env)

  // track changes & save to storage
  onSnapshot(rootState, snapshot => {
    env.storage.save(ROOT_STORAGE_KEY, snapshot)
  })

  return rootState
}
