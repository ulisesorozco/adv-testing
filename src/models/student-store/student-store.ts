import { types } from 'mobx-state-tree'
import { getAllStudents } from './student.action'

export const StudentStoreModel = types
  .model('StudentStore')
  .props({
    /** Tracks the status of the Student workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get students */
    errorMessage: types.maybe(types.string),
  })
  // setters
  .actions(self => ({
    setStatus(value: 'idle' | 'pending' | 'done' | 'error') {
      self.status = value
    },
    setErrorMessage(value: string) {
      self.errorMessage = value
    },
    reset() {
      self.status = 'idle'
      self.errorMessage = ''
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    getAllStudents: async function(): Promise<boolean> {
      return await getAllStudents(self)
    },
  }))

export type StudentStore = typeof StudentStoreModel.Type
export type StudentStoreSnapshot = typeof StudentStoreModel.SnapshotType
