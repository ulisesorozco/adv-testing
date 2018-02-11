import { InstructorStore } from '.'
import { getEnv, getRoot } from 'mobx-state-tree'
import { Environment } from '../environment'
import { RootStore } from '../root-store'
import { translate } from '../../i18n/translate'
import { isEmpty } from 'ramda'

/**
 * Get all instructors.
 */
export async function getAllInstructors(self) {
  const instructorStore = self as InstructorStore
  const environment = getEnv(self) as Environment

  // prep our state before we start
  instructorStore.setStatus('pending')
  instructorStore.setErrorMessage(null)

  const response = await environment.api.getAllInstructors()

  try {
    instructorStore.setStatus('done')
    return true
  } catch (e) {
    instructorStore.setStatus('error')
    instructorStore.setErrorMessage(translate('firebase.error.unknown'))
  }

  return false
}
