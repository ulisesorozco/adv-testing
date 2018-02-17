import { StudentStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'
import { isEmpty } from 'ramda'

/**
 * Get all instructors.
 */
export async function getAllStudents(self) {
  const studentStore = self as StudentStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  studentStore.setStatus('pending')
  studentStore.setErrorMessage(null)

  try {
    const response = await environment.api.getAllStudents()
    studentStore.setStudents(response.response.data)

    studentStore.setStatus('done')
    return true
  } catch (e) {
    studentStore.setStatus('error')
    studentStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}

/**
 * Create a student.
 */
export async function createStudent(self, payload) {
  const studentStore = self as StudentStore
  const environment = getEnv(self) as Environment
  try {
    // prep our state before we start
    studentStore.setStatus('pending')
    studentStore.setErrorMessage(null)

    const response = await environment.api.creatStudent(payload)

    studentStore.setStatus('done')
    return response.ok
  } catch (e) {
    studentStore.setStatus('error')
    studentStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
