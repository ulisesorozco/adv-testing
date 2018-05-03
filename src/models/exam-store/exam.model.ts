import { types } from 'mobx-state-tree'

export const ExamModel = types
  .model('Exam')
  .props({
    id: types.maybe(types.number),
    student_id: types.maybe(types.number),
    exam_type_id: types.maybe(types.number),
    exam_section_ids: types.maybe(types.string),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string),
    scheduled: types.maybe(types.string),
    pages: types.maybe(types.number),
    document_metadata: types.maybe(types.string),
    is_processed: types.maybe(types.string),
  })
  .views(self => ({}))
  // setters
  .actions(self => ({
    reset() {
      self.id = null
      self.student_id = null
      self.exam_type_id = null
      self.exam_section_ids = null
      self.created_at = ''
      self.updated_at = ''
      self.scheduled = ''
      self.pages = null
      self.document_metadata = ''
      self.is_processed = ''
    },
    setId(value: number) {
      self.id = value
    },
    setStudentId(value: number) {
      self.student_id = value
    },
    setExamTypeId(value: number) {
      self.exam_type_id = value
    },
    setExamSectionIds(value: any) {
      self.exam_section_ids = value
    },
    setCreatedAt(value: string) {
      self.created_at = value
    },
    setUpdatedAt(value: string) {
      self.updated_at = value
    },
    setScheduled(value: string) {
      self.scheduled = value
    },
    setPages(value: number) {
      self.pages = value
    },
    setDocumentMetaData(value: string) {
      self.document_metadata = value
    },
    setResults(value: string) {
      self.is_processed = value
    },
  }))

export const ExamType = types
  .model('Type')
  .props({
    id: types.maybe(types.number),
    active: types.maybe(types.boolean),
    exam_type: types.maybe(types.string),
    exam_version: types.maybe(types.string),
    created_at: types.maybe(types.string),
    updated_at: types.maybe(types.string),
  })
  .views(self => ({}))
  // setters
  .actions(self => ({
    reset() {
      self.id = null
      self.active = null
      self.exam_type = ''
      self.exam_version = ''
      self.created_at = ''
      self.updated_at = ''
    },
    setId(value: number) {
      self.id = value
    },
    setActive(value: boolean) {
      self.active = value
    },
    setExamType(value: string) {
      self.exam_type = value
    },
    setExamVersion(value: string) {
      self.exam_version = value
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
export type Type = typeof ExamType.Type

/**
 * The serialized version of a `Exam` often used when acquiring
 * data from an API (for example).
 */
export type ExamSnapshot = typeof ExamModel.SnapshotType
export type TypeSnapshot = typeof ExamType.SnapshotType
