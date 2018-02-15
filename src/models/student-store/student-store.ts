import { types } from 'mobx-state-tree'
import { Student, StudentModel } from './student.model'
import { getAllStudents } from './student.action'

export const StudentStoreModel = types
  .model('StudentStore')
  .props({
    /** Tracks the status of the Student workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get students */
    errorMessage: types.maybe(types.string),
    /** All students */
    students: types.optional(types.array(StudentModel), []),
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
    setStudents(values: any) {
      self.students.clear()
      values.forEach(value => {
        const student = StudentModel.create({
          id: value.id + '',
          firstname: value.firstname + '',
          lastname: value.lastname + '',
          email: value.email + '',
          username: value.username + '',
          password: value.password + '',
          created_at: value.created_at + '',
          updated_at: value.updated_at + '',
        })
        self.students.push(student)
      })
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
