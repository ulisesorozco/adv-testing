import { ExamStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'

/**
 * Get all instructors.
 */
export async function getAllExams(self) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  examStore.setStatus('pending')
  examStore.setErrorMessage(null)

  try {
    const response = await environment.api.getAllExams()
    examStore.setExams(response.response.data)

    examStore.setStatus('done')
    return true
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}

/**
 * Create exam.
 */
export async function createExam(self, payload) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment
  try {
    // prep our state before we start
    examStore.setStatus('pending')
    examStore.setErrorMessage(null)

    const response = await environment.api.creatExam(payload)

    examStore.setStatus('done')
    return response.ok
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
