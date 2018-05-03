import { types } from 'mobx-state-tree'
import { equals } from 'ramda'
import { StudentModel } from './scan.model'
import { uploads } from './scan.action'

export const ScanStoreModel = types
  .model('ScanStore')
  .props({
    /** Tracks the status of the Exam workflow. */
    status: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
    /** The error message to show if we cannot get exams */
    errorMessage: types.maybe(types.string),
    /** Uploaded exams */
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
    push(value: any) {
      let index: number = -1
      self.students.forEach((student, idx) => {
        if (student.student_id == value.student_id) index = idx
      })

      if (index > -1) {
        let pageNum = self.students[index].page_num + 1
        if (pageNum > self.students[index].page_num) pageNum = self.students[index].page_num

        self.students[index].setId(value.id)
        self.students[index].setStudentId(value.student_id)
        self.students[index].setStudentName(value.student_name)
        self.students[index].setExamId(value.exam_id)
        self.students[index].setExamTitle(value.exam_title)
        self.students[index].setExamType(value.exam_type)
        self.students[index].setExamVersion(value.exam_version)
        self.students[index].setPages(value.pages)
        self.students[index].setPageNum(value.page_num)
        self.students[index].setUpdatedAt(value.updated_at)
      } else {
        const upload = StudentModel.create({
          id: value.id,
          student_id: value.student_id,
          student_name: value.student_name,
          exam_id: value.exam_id,
          exam_title: value.exam_title,
          exam_type: value.exam_type,
          exam_version: value.exam_version,
          pages: value.pages,
          page_num: value.page_num,
          updated_at: value.updated_at,
        })
        self.students.push(upload)
      }
    },
    remove(value: number) {
      self.students.forEach((student, index) => {
        if (equals(student.id, value)) {
          self.students.remove(self.students[index])
        }
      })
    },
  }))
  // async actions tend to be larger, so we farm these out to children
  .actions(self => ({
    uploads: async function(payload): Promise<boolean> {
      return await uploads(self, payload)
    },
  }))

export type ScanStore = typeof ScanStoreModel.Type
export type ScanStoreSnapshot = typeof ScanStoreModel.SnapshotType
