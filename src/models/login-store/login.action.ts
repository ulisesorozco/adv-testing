import { LoginStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'
import { isEmpty } from 'ramda'

/**
 * Let's login.
 */
export async function loginWithEmail(self) {
  // strongly type self inside to make pacify typescript
  const loginStore = self as LoginStore

  // Grab the environment dependencies since this is pretty much always the point of async actions.
  const environment = getEnv(self) as Environment

  // prep our state before we start
  loginStore.setStatus('pending')
  loginStore.setErrorMessage(null)

  try {
    loginStore.setStatus('done')
    return true
  } catch (e) {
    // IMPORTANT:
    //   Don't trust your services.  Always try/catch.  You may decide to bubble
    //   up the error, but it will be on your terms, not your dependencies.
    //
    loginStore.setStatus('error')
    loginStore.setErrorMessage(translate('firebase.error.unknown'))
  }

  return false
}
