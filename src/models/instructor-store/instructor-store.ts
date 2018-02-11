import { types } from 'mobx-state-tree'
import { getAllInstructors } from './instructor.action'

export const InstructorStoreModel = types
  .model('InstructorStore')
  .props({
    /** Tracks the status of the Instructor workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get instructors */
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
    getAllInstructors: async function(): Promise<boolean> {
      return await getAllInstructors(self)
    },
  }))

export type InstructorStore = typeof InstructorStoreModel.Type
export type InstructorStoreSnapshot = typeof InstructorStoreModel.SnapshotType
