import { ExamStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { isNil } from 'ramda'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'

/**
 * Get all exams.
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
 * Get all instructors.
 */
export async function getResults(self, payload) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  examStore.setStatus('pending')
  examStore.setErrorMessage(null)

  try {
    const response = await environment.api.results(payload)
    if (response.ok && !isNil(response.response.data)) {
      return JSON.stringify(response.response.data)
    }

    examStore.setStatus('done')
    return ''
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return ''
}

/**
 * Get exam available types.
 */
export async function getExamTypes(self) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  examStore.setStatus('pending')
  examStore.setErrorMessage(null)

  try {
    const response = await environment.api.getExamTypes()
    examStore.setTypes(response.response)

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

/**
 * Remove exam.
 */
export async function removeExam(self, payload) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment
  try {
    // prep our state before we start
    examStore.setStatus('pending')
    examStore.setErrorMessage(null)

    const response = await environment.api.deleteExam(payload)

    examStore.setStatus('done')
    return response.ok
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}

/**
 * Update exam.
 */
export async function updateExam(self, payload) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment
  try {
    // prep our state before we start
    examStore.setStatus('pending')
    examStore.setErrorMessage(null)

    const response = await environment.api.updateExam(payload)

    examStore.setStatus('done')
    return response.ok
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}

/**
 * Send email.
 */
export async function sendEmail(self, payload) {
  const examStore = self as ExamStore
  const environment = getEnv(self) as Environment
  try {
    // prep our state before we start
    examStore.setStatus('pending')
    examStore.setErrorMessage(null)

    const response = await environment.api.sendEmail(payload)

    examStore.setStatus('done')
    return response.ok
  } catch (e) {
    examStore.setStatus('error')
    examStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
