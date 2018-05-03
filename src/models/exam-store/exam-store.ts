import { types } from 'mobx-state-tree'
import { find, isNil, prop, propEq, slice, sortBy, toLower, uniq } from 'ramda'
import { ExamModel, ExamType } from './exam.model'
import {
  getAllExams,
  getExamTypes,
  createExam,
  updateExam,
  getResults,
  removeExam,
  sendEmail,
} from './exam.action'

export const ExamStoreModel = types
  .model('ExamStore')
  .props({
    /** Tracks the status of the Exam workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get exams */
    errorMessage: types.maybe(types.string),
    /** All exams */
    exams: types.optional(types.array(ExamModel), []),
    /** All exam types */
    types: types.optional(types.array(ExamType), []),
    /** All filters */
    filters: types.optional(types.array(types.string), []),
    /** Current exam */
    currentExam: types.maybe(ExamModel),
    /** Current exam type */
    currentType: types.maybe(ExamType),
    /** Current section */
    currentSection: types.maybe(types.string),
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
    setCurrentSection(value: string) {
      self.currentSection = value
    },
    setCurrentType(value: any) {
      if (isNil(value)) {
        const type = ExamType.create({
          id: null,
          active: null,
          exam_type: '',
          exam_version: '',
          created_at: '',
          updated_at: '',
        })
        self.currentType = type
      } else {
        const type = ExamType.create({
          id: value.id,
          active: value.active,
          exam_type: value.exam_type,
          exam_version: value.exam_version,
          created_at: value.created_at,
          updated_at: value.updated_at,
        })
        self.currentType = type
      }
    },
    setCurrentExam(value: any) {
      if (isNil(value)) {
        const exam = ExamModel.create({
          id: null,
          student_id: null,
          exam_type_id: null,
          exam_section_ids: '',
          created_at: '',
          updated_at: '',
          scheduled: '',
          pages: null,
          document_metadata: '',
          is_processed: '',
        })
        self.currentExam = exam
      } else {
        const exam = ExamModel.create({
          id: value.id,
          student_id: value.student_id,
          exam_type_id: value.exam_type_id,
          exam_section_ids: value.exam_section_ids + '',
          created_at: value.created_at,
          updated_at: value.updated_at,
          scheduled: value.scheduled,
          pages: value.pages,
          document_metadata: value.document_metadata,
          is_processed: value.is_processed,
        })
        self.currentExam = exam
      }
    },
    setExams(values: any) {
      self.exams.clear()
      values.forEach(value => {
        const exam = ExamModel.create({
          id: value.id,
          student_id: value.student_id,
          exam_type_id: value.exam_type_id,
          exam_section_ids: value.exam_section_ids + '',
          created_at: value.created_at,
          updated_at: value.updated_at,
          scheduled: value.scheduled,
          pages: value.pages,
          document_metadata: value.document_metadata,
          is_processed: value.is_processed,
        })
        self.exams.push(exam)
      })
    },
    setTypes(values: any) {
      self.types.clear()
      values.forEach(value => {
        const type = ExamType.create({
          id: value.id,
          active: value.active,
          exam_type: value.exam_type,
          exam_version: value.exam_version,
          created_at: value.created_at,
          updated_at: value.updated_at,
        })
        self.types.push(type)
      })
    },
    getType(value: number) {
      const type = find(propEq('id', value))(self.types)
      return type
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    getAllExams: async function(): Promise<boolean> {
      return await getAllExams(self)
    },
    createExam: async function(payload): Promise<boolean> {
      return await createExam(self, payload)
    },
    updateExam: async function(payload): Promise<boolean> {
      return await updateExam(self, payload)
    },
    removeExam: async function(payload): Promise<boolean> {
      return await removeExam(self, payload)
    },
    getExamTypes: async function(): Promise<boolean> {
      return await getExamTypes(self)
    },
    getResults: async function(payload): Promise<string> {
      return await getResults(self, payload)
    },
    sendEmail: async function(payload): Promise<string> {
      return await sendEmail(self, payload)
    },
  }))

export type ExamStore = typeof ExamStoreModel.Type
export type ExamStoreSnapshot = typeof ExamStoreModel.SnapshotType
