import { types } from 'mobx-state-tree'

export const StudentModel = types
  .model('Student')
  .props({
    /** The User Id */
    id: types.maybe(types.number),
    /** The User name */
    student_id: types.maybe(types.number),
    /** The student name */
    student_name: types.optional(types.string, ''),
    /** The exam id */
    exam_id: types.maybe(types.number),
    /** The exam title */
    exam_title: types.maybe(types.number),
    /** The exam title */
    exam_type: types.optional(types.string, ''),
    /** The exam title */
    exam_version: types.optional(types.string, ''),
    /** The total page counts */
    pages: types.maybe(types.number),
    /** The page index */
    page_num: types.maybe(types.number),
    /** The update date */
    updated_at: types.optional(types.string, ''),
  })
  .views(self => ({}))
  // setters
  .actions(self => ({
    reset() {
      self.id = null
      self.student_id = null
      self.student_name = null
      self.exam_id = null
      self.exam_title = null
      self.exam_type = null
      self.exam_version = null
      self.pages = null
      self.page_num = null
      self.updated_at = null
    },
    setId(value: number) {
      self.id = value
    },
    setStudentId(value: number) {
      self.student_id = value
    },
    setStudentName(value: string) {
      self.student_name = value
    },
    setExamId(value: number) {
      self.exam_id = value
    },
    setExamTitle(value: number) {
      self.exam_title = value
    },
    setExamType(value: string) {
      self.exam_type = value
    },
    setExamVersion(value: string) {
      self.exam_version = value
    },
    setPages(value: number) {
      self.pages = value
    },
    setPageNum(value: number) {
      self.page_num = value
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
export type Student = typeof StudentModel.Type

/**
 * The serialized version of a `Exam` often used when acquiring
 * data from an API (for example).
 */
export type StudentSnapshot = typeof StudentModel.SnapshotType
export type StudentModelSnapshot = typeof StudentModel.SnapshotType
