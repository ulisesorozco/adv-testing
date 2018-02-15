import { types } from 'mobx-state-tree'

/**
 * A user within the system
 *
 * The `mobx-state-tree` model used to create `Student` instances
 * as well as including as props in other `mobx-state-tree` models.
 */
export const StudentModel = types
  .model('User')
  .props({
    /** The User Id */
    id: types.optional(types.string, ''),
    /** The User name */
    firstname: types.optional(types.string, ''),
    /** The User Image Url */
    lastname: types.optional(types.string, ''),
    /** The email address. */
    email: types.optional(types.string, ''),
    /** The user name */
    username: types.optional(types.string, ''),
    /** The password */
    password: types.optional(types.string, ''),
    /** The created time */
    created_at: types.optional(types.string, ''),
    /** The updated time */
    updated_at: types.optional(types.string, ''),
  })
  .views(self => ({}))
  // setters
  .actions(self => ({
    reset() {
      self.id = ''
      self.firstname = ''
      self.lastname = ''
      self.email = ''
      self.username = ''
      self.password = ''
      self.created_at = ''
      self.updated_at = ''
    },
    serId(value: string) {
      self.id = value
    },
    setFirstName(value: string) {
      self.firstname = value
    },
    setLastName(value: string) {
      self.lastname = value
    },
    setEmail(value: string) {
      self.email = value
    },
    setUserName(value: string) {
      self.username = value
    },
    setPassword(value: string) {
      self.password = value
    },
    setCreatedAt(value: string) {
      self.created_at = value
    },
    setUpdatedAt(value: string) {
      self.updated_at = value
    },
  }))

/**
 * A user within the system
 *
 * An instance of a Student.
 */
export type Student = typeof StudentModel.Type

/**
 * The serialized version of a `Student` often used when acquiring
 * data from an API (for example).
 */
export type StudentSnapshot = typeof StudentModel.SnapshotType
