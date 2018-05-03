import { types } from 'mobx-state-tree'

import { login, register } from './login.action'

/**
 * Coordinates logging in.
 *
 * The `mobx-state-tree` model used to create `LoginStore` instances
 * as well as including as props in other `mobx-state-tree` models.
 */
export const LoginStoreModel = types
  .model('LoginStore')
  .props({
    /** The login token */
    token: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    accountType: types.optional(types.string, ''),
    /** Tracks the status of the login workflow. */
    status: types.optional(
      types.enumeration(['idle', 'pending', 'done', 'error', 'needToRegister']),
      'idle',
    ),
    /** The error message to show if we cannot login */
    errorMessage: types.maybe(types.string),
  })
  .views(self => ({
    /** Are we currently logging in? */
    get isLoggingIn() {
      return self.status === 'pending'
    },
  }))
  // setters
  .actions(self => ({
    setToken(newToken) {
      self.token = newToken
    },
    setEmail(email: string) {
      self.email = email
    },
    setPassword(password: string) {
      self.password = password
    },
    setType(type: string) {
      self.accountType = type
    },
    setStatus(value: 'idle' | 'pending' | 'done' | 'error' | 'needToRegister') {
      self.status = value
    },
    setErrorMessage(value: string) {
      self.errorMessage = value
    },
    reset() {
      self.status = 'idle'
      self.errorMessage = ''
      self.token = ''
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    login: async function(payload): Promise<boolean> {
      return await login(self, payload)
    },
    register: async function(payload): Promise<boolean> {
      return await register(self, payload)
    },
  }))

/**
 * Coordinates logging in.
 *
 * An instance of a LoginStore.
 */
export type LoginStore = typeof LoginStoreModel.Type

/**
 * The serialized version of a `LoginStore` often used when acquiring
 * data from an API (for example).
 */
export type LoginStoreSnapshot = typeof LoginStoreModel.SnapshotType
