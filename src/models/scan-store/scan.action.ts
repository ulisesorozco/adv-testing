import { ScanStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { UserStore } from '../user-store'
import { translate } from '../../i18n/translate'

/**
 * Upload images
 */
export async function uploads(self, payload) {
  const scanStore = self as ScanStore
  const userStore = getRoot(self).userStore
  const examStore = getRoot(self).examStore
  const environment = getEnv(self) as Environment

  try {
    // prep our state before we start
    scanStore.setStatus('pending')
    scanStore.setErrorMessage(null)

    const response = await environment.api.uploads(payload)

    if (response.ok) {
      userStore.users.forEach(user => {
        if (user.id == response.response.data.student_id) {
          response.response.data.student_name = user.fullname
          return
        }
      })
      examStore.exams.forEach(exam => {
        if (exam.id == response.response.data.exam_id) {
          response.response.data.pages = exam.pages
          examStore.types.forEach(type => {
            if (exam.exam_type_id == type.id) {
              response.response.data.exam_type = type.exam_type
              response.response.data.exam_version = type.exam_version
            }
          })
          response.response.data.exam_title = exam.title
        }
      })
      response.response.data.page_num = payload.page_num
      scanStore.push(response.response.data)
    }

    scanStore.setStatus('done')
    return response.ok
  } catch (e) {
    scanStore.setStatus('error')
    scanStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
