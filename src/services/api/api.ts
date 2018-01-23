/**
 * Define all the possible ways out of your service here.
 */
export type APIServiceResponse = {
  ok: boolean
  status?: number
  kind: string
  response: any,
}

export interface APIConfig {
  dev: string
  staging: string
  production: string
}

declare global {
  interface Console {
    tron: any
  }
}

/**
 * Responsible for talking with API.
 */
export class API {
  config: APIConfig

  token: string

  /** Creates the only instance of API service. */
  constructor(config: APIConfig) {
    this.config = config
  }

  /** Will be called before any React components are initialized. */
  async setup() {
    // Initialize functionalities here
  }

  setupToken(newToken) {
    this.token = newToken
  }

  /**
   * Base request of all APIs.
   */
  baseRequest = async (
    method: string,
    endpoint: string,
    payload: any,
  ): Promise<APIServiceResponse> => {
    try {
      const params = {
        method: method,
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token },
      }
      if (payload) {
        params['body'] = JSON.stringify(payload)
      }
      const url = `${this.config.dev}/${endpoint}`

      __DEV__ && console.log(`API REQUEST ---->>>>> ${url}`, params)

      const res = await fetch(url, params)
      let response: any

      // always safely try to unpack a json object from the server because
      // it may not be available to do that.
      try {
        response = await res.json()
      } catch (e) {}
      __DEV__ && console.log(`API RESPONSE ----<<<<<< ${url}`, res)
      __DEV__ && console.tron.display({ name: 'API RESPONSE', value: res })

      // send back a happy-path response
      return {
        ok: res.ok,
        status: res.status,
        kind: res.ok ? 'success' : res.statusText,
        response,
      }
    } catch (e) {
      // API issue... could be a thousand things... here you would figure out the subset
      // your app is interested in specifically.
      switch (e.code) {
        case 'undefined':
          return { ok: false, kind: 'undefined', response: null }
        default:
          return { ok: false, kind: 'unknown-error', response: null }
      }
    }
  }

  publicRequest = async (method: string, endpoint: string, payload: any) => {
    return this.baseRequest(method, endpoint, payload)
  }

  privateRequest = async (
    method: string,
    endpoint: string,
    payload: any,
    forceCredentials: any,
  ) => {
    const credentials = forceCredentials

    try {
      let authPayload = { ...payload }
      if (!authPayload.api_key) {
        authPayload = { ...authPayload, ...credentials }
      }

      return this.baseRequest(method, endpoint, authPayload)
    } catch (e) {
      // API issue... could be a thousand things... here you would figure out the subset
      // your app is interested in specifically.
      switch (e.code) {
        case 'undefined':
          return { ok: false, kind: 'undefined' }

        default:
          return { ok: false, kind: 'unknown-error' }
      }
    }
  }
}
