import { types } from 'mobx-state-tree'
import { LoginStoreModel } from '../login-store'
import { ModalStoreModel } from '../modal-store'

/**
 * An RootStore model.
 */
export const RootStoreModel = types
  .model('Root')
  .props({
    loginStore: types.optional(LoginStoreModel, {}),
    modalStore: types.optional(ModalStoreModel, {}),
  })
  .actions(self => ({
    reset() {
      self.loginStore.reset()
      self.modalStore.reset()
    },
  }))

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
