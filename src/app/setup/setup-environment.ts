// the environment we're creating
import { Environment } from '../../models/environment'

// the services become it's properties
import { Storage } from '../../services/storage'
import { API } from '../../services/api'

// and here's how we configure them
import * as config from './config'

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function setupEnvironment() {
  const env = new Environment()

  // create each service
  env.storage = new Storage(config.storage)
  env.api = new API(config.api)

  // allow each service to setup
  await env.storage.setup()
  await env.api.setup()

  return env
}
