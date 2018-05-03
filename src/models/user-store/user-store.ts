import { types } from 'mobx-state-tree'
import { equals, isEmpty, prop, slice, sortBy, toLower, uniq } from 'ramda'
import { UserModel } from './user.model'
import { getAllUsers, createUser } from './user.action'

export const UserStoreModel = types
  .model('UserStore')
  .props({
    /** Tracks the status of the Student workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get users */
    errorMessage: types.maybe(types.string),
    /** The filters */
    filters: types.optional(types.array(types.string), []),
    /** All users */
    users: types.optional(types.array(UserModel), []),
    /** Current student */
    currentUser: types.maybe(UserModel),
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
    setCurrentUser(value: any) {
      const student = UserModel.create({
        id: value.id,
        active: value.active,
        account_type: value.account_type,
        instructor_id: value.instructor_id,
        firstname: value.firstname,
        lastname: value.lastname,
        fullname: value.fullname,
        created_at: value.created_at,
        updated_at: value.updated_at,
      })
      self.currentUser = student
    },
    setUsers(values: any) {
      let filters = []
      self.users.clear()
      self.filters.clear()
      values = sortBy(prop('lastname'), values)
      values.forEach(value => {
        if (equals(value.account_type, 'student')) {
          filters.push(toLower(slice(0, 1, value.lastname)))
        }
      })
      filters = uniq(filters)
      filters.forEach(filter => {
        if (!isEmpty(filter)) {
          self.filters.push(filter)
        }
      })
      values.forEach(value => {
        if (!isEmpty(value.firstname) && !isEmpty(value.lastname)) {
          const student = UserModel.create({
            id: value.id,
            active: value.active,
            account_type: value.account_type,
            instructor_id: value.instructor_id,
            firstname: value.firstname,
            lastname: value.lastname,
            fullname: value.fullname,
            created_at: value.created_at,
            updated_at: value.updated_at,
          })
          self.users.push(student)
        }
      })
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    getAllUsers: async function(): Promise<boolean> {
      return await getAllUsers(self)
    },
    createUser: async function(payload: any): Promise<boolean> {
      return await createUser(self, payload)
    },
  }))

export type UserStore = typeof UserStoreModel.Type
export type UserStoreSnapshot = typeof UserStoreModel.SnapshotType
