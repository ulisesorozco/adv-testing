import { types } from 'mobx-state-tree'

export const UserModel = types
  .model('User')
  .props({
    id: types.maybe(types.number),
    active: types.maybe(types.number),
    account_type: types.maybe(types.string),
    instructor_id: types.maybe(types.number),
    firstname: types.maybe(types.string),
    lastname: types.maybe(types.string),
    fullname: types.maybe(types.string),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string),
  })
  .views(self => ({}))
  // setters
  .actions(self => ({
    reset() {
      self.id = null
      self.active = null
      self.account_type = null
      self.instructor_id = null
      self.firstname = null
      self.lastname = null
      self.fullname = null
      self.created_at = null
      self.updated_at = null
    },
    serId(value: number) {
      self.id = value
    },
    setActive(value: number) {
      self.active = value
    },
    setAccountType(value: string) {
      self.account_type = value
    },
    setInstructorId(value: number) {
      self.instructor_id = value
    },
    setFirstName(value: string) {
      self.firstname = value
    },
    setLastName(value: string) {
      self.lastname = value
    },
    setFullName(value: string) {
      self.fullname = value
    },
    setCreatedAt(value: string) {
      self.created_at = value
    },
    setUpdatedAt(value: string) {
      self.updated_at = value
    },
  }))

export type User = typeof UserModel.Type
export type UserModelSnapshot = typeof UserModel.SnapshotType
