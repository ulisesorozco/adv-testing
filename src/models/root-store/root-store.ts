import { types } from 'mobx-state-tree'
import { LoginStoreModel } from '../login-store'
import { ModalStoreModel } from '../modal-store'
import { InstructorStoreModel } from '../instructor-store'
import { UserStoreModel } from '../user-store'
import { ExamStoreModel } from '../exam-store'
import { ScanStoreModel } from '../scan-store'

/**
 * An RootStore model.
 */
export const RootStoreModel = types
  .model('Root')
  .props({
    loginStore: types.optional(LoginStoreModel, {}),
    modalStore: types.optional(ModalStoreModel, {}),
    instructorStore: types.optional(InstructorStoreModel, {}),
    userStore: types.optional(UserStoreModel, {}),
    examStore: types.optional(ExamStoreModel, {}),
    scanStore: types.optional(ScanStoreModel, {}),
  })
  .actions(self => ({
    reset() {
      self.loginStore.reset()
      self.modalStore.reset()
      self.instructorStore.reset()
      self.userStore.reset()
      self.examStore.reset()
      self.scanStore.reset()
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
