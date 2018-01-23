import { Storage } from '../services/storage'
import { API } from '../services/api'

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  /**
   * React Native Async Storage
   */
  storage: Storage

  /**
   * It's API service!
   */
  api: API
}
