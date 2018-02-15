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
  const instructorStore = self as StudentStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  instructorStore.setStatus('pending')
  instructorStore.setErrorMessage(null)

  const response = await environment.api.getAllStudents()

  try {
    instructorStore.setStatus('done')
    return true
  } catch (e) {
    instructorStore.setStatus('error')
    instructorStore.setErrorMessage(translate('errors.unknown'))
  }

  return false
}
