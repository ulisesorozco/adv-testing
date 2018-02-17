import { types } from 'mobx-state-tree'
import { prop, slice, sortBy, toLower, uniq } from 'ramda'
import { ExamModel } from './exam.model'
import { getAllExams } from './exam.action'

export const ExamStoreModel = types
  .model('ExamStore')
  .props({
    /** Tracks the status of the Exam workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get exams */
    errorMessage: types.maybe(types.string),
    /** All exams */
    exams: types.optional(types.array(ExamModel), []),
    /** All filters */
    filters: types.optional(types.array(types.string), []),
    /** Current exam */
    currentExam: types.maybe(ExamModel),
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
    setCurrentExam(value: any) {
      const exam = ExamModel.create({
        id: value.id + '',
        title: value.title + '',
        exam_type: value.exam_type + '',
        version: value.version + '',
        section: value.section + '',
        created_at: value.created_at + '',
        updated_at: value.updated_at + '',
      })
      self.currentExam = exam
    },
    setExams(values: any) {
      let filters = []
      self.exams.clear()
      self.filters.clear()
      values = sortBy(prop('title'), values)
      values.forEach(value => filters.push(toLower(slice(0, 1, value.title))))
      filters = uniq(filters)
      filters.forEach(filter => {
        self.filters.push(filter)
      })
      values.forEach(value => {
        const exam = ExamModel.create({
          id: value.id + '',
          title: value.title + '',
          exam_type: value.exam_type + '',
          version: value.version + '',
          section: value.section + '',
          created_at: value.created_at + '',
          updated_at: value.updated_at + '',
        })
        self.exams.push(exam)
      })
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    getAllExams: async function(): Promise<boolean> {
      return await getAllExams(self)
    },
  }))

export type ExamStore = typeof ExamStoreModel.Type
export type ExamStoreSnapshot = typeof ExamStoreModel.SnapshotType
