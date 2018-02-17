import { types } from 'mobx-state-tree'
import { prop, slice, sortBy, toLower, uniq } from 'ramda'
import { StudentModel } from './student.model'
import { getAllStudents, createStudent } from './student.action'

export const StudentStoreModel = types
  .model('StudentStore')
  .props({
    /** Tracks the status of the Student workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get students */
    errorMessage: types.maybe(types.string),
    /** The filters */
    filters: types.optional(types.array(types.string), []),
    /** All students */
    students: types.optional(types.array(StudentModel), []),
    /** Current student */
    currentStudent: types.maybe(StudentModel),
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
    setCurrentStudent(value: any) {
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
      self.currentStudent = student
    },
    setStudents(values: any) {
      let filters = []
      self.students.clear()
      self.filters.clear()
      values = sortBy(prop('lastname'), values)
      values.forEach(value => filters.push(toLower(slice(0, 1, value.lastname))))
      filters = uniq(filters)
      filters.forEach(filter => {
        self.filters.push(filter)
      })
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
    createStudent: async function(payload: any): Promise<boolean> {
      return await createStudent(self, payload)
    },
  }))

export type StudentStore = typeof StudentStoreModel.Type
export type StudentStoreSnapshot = typeof StudentStoreModel.SnapshotType
