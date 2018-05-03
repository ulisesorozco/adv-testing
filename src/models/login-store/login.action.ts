import { LoginStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'

export async function login(self, payload) {
  const loginStore = self as LoginStore
  const environment = getEnv(self) as Environment

  loginStore.setStatus('pending')
  loginStore.setErrorMessage(null)

  try {
    const response = await environment.api.login(payload)

    if (response.ok) {
      self.setToken(response.response.data.api_key)
      self.setEmail(response.response.data.email)
      self.setType(payload.account_type)

      environment.api.setupToken(response.response.data.api_key)
      loginStore.setStatus('done')
      return true
    }

    loginStore.setStatus('done')
    return true
  } catch (e) {
    loginStore.setStatus('error')
    loginStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}

export async function register(self, payload) {
  const loginStore = self as LoginStore
  const environment = getEnv(self) as Environment

  loginStore.setStatus('pending')
  loginStore.setErrorMessage(null)

  try {
    const response = await environment.api.register(payload)

    if (response.ok) {
      self.setToken(response.response.data.api_key)
      self.setEmail(response.response.data.email)
      self.setType(payload.account_type)

      environment.api.setupToken(response.response.data.api_key)
      loginStore.setStatus('done')
      return true
    }

    loginStore.setStatus('error')
    return false
  } catch (e) {
    loginStore.setStatus('error')
    loginStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
