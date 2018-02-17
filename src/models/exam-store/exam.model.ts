import { types } from 'mobx-state-tree'

/**
 * A user within the system
 *
 * The `mobx-state-tree` model used to create `Exam` instances
 * as well as including as props in other `mobx-state-tree` models.
 */
export const ExamModel = types
  .model('User')
  .props({
    /** The User Id */
    id: types.optional(types.string, ''),
    /** The User name */
    title: types.optional(types.string, ''),
    /** The User Image Url */
    exam_type: types.optional(types.string, ''),
    /** The email address. */
    version: types.optional(types.string, ''),
    /** The user name */
    section: types.optional(types.string, ''),
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
      self.title = ''
      self.exam_type = ''
      self.version = ''
      self.section = ''
      self.created_at = ''
      self.updated_at = ''
    },
    serId(value: string) {
      self.id = value
    },
    setTitle(value: string) {
      self.title = value
    },
    setExamType(value: string) {
      self.exam_type = value
    },
    setVersion(value: string) {
      self.version = value
    },
    setSection(value: string) {
      self.section = value
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
 * An instance of a Exam.
 */
export type Exam = typeof ExamModel.Type

/**
 * The serialized version of a `Exam` often used when acquiring
 * data from an API (for example).
 */
export type ExamSnapshot = typeof ExamModel.SnapshotType
