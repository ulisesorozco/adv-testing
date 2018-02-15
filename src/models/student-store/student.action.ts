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

  const response = await environment.api.getAllStudents()
  studentStore.setStudents(response.response.data)

  try {
    studentStore.setStatus('done')
    return true
  } catch (e) {
    studentStore.setStatus('error')
    studentStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}