import apisauce from 'apisauce'

export type APIServiceResponse = {
  ok: boolean
  status?: number
  kind: 'success' | 'undefined' | 'unknown-error'
  response?: any,
}

export interface APIConfig {
  dev: string
  staging: string
  production: string
}

/**
 * Responsible for talking with API.
 */
export class API {
  api: any
  config: APIConfig
  token: string

  /** Creates the only instance of API service. */
  constructor(config: APIConfig) {
    this.config = config
    this.api = apisauce.create({
      baseURL: this.config.dev,
      headers: {
        'Content-Type': 'application/json',
        host: 'api-dev.advantagetesting.com',
        app_id: '123',
        app_key: 'abc',
      },
      timeout: 10000,
    })
  }

  /** Will be called before any React components are initialized. */
  async setup() {
    // Initialize functionalities here
  }

  setupToken(newToken) {
    this.token = newToken
    this.api.setHeader('Authorization', `Bearer ${this.token}`)
  }

  processResponse = response => {
    if (response.ok) {
      return {
        ok: true,
        status: response.status,
        kind: 'success',
        response: response.data,
      }
    } else if (!response.ok && response.status === 401) {
      return {
        ok: false,
        status: response.status,
        kind: 'invalid token',
      }
    }

    return {
      ok: false,
      status: response.status,
      kind: 'unknown-error',
    }
  }

  guildAll = async () => {
    const response = await this.api.get('guilds')
    return this.processResponse(response)
  }

  guildCreate = async payload => {
    const response = await this.api.post('guilds', payload)
    return this.processResponse(response)
  }

  guildUpdate = async (guild_id, payload) => {
    const response = await this.api.put(`guilds/${guild_id}`, payload)
    return this.processResponse(response)
  }

  /////////////////////// Instructors ////////////////
  /**
   * Get all instructors.
   */
  getAllInstructors = async () => {
    const response = await this.api.get('instructors')
    return this.processResponse(response)
  }
  /**
   * Get the specific instructor.
   */
  getInstructor = async () => {
    const response = await this.api.get('instructors')
    return this.processResponse(response)
  }
  /**
   * Delete the specific instructor.
   */
  deleteInstructor = async () => {
    const response = await this.api.delete('instructors')
    return this.processResponse(response)
  }
  /**
   * Create a instructor
   */
  createInstructor = async payload => {
    const response = await this.api.post('instructors', payload)
    return this.processResponse(response)
  }

  /////////////////////// Students ////////////////
  /**
   * Get all students.
   */
  getAllStudents = async () => {
    const response = await this.api.get('students')
    return this.processResponse(response)
  }
  /**
   * Get the specific student.
   */
  getStudent = async (id: number) => {
    const response = await this.api.get(`students/${id}`)
    return this.processResponse(response)
  }
  /**
   * Delete the specific student.
   */
  deleteStudent = async (id: number) => {
    const response = await this.api.delete(`students/${id}`)
    return this.processResponse(response)
  }
  /**
   * Create a student
   */
  creatStudent = async payload => {
    const response = await this.api.post('students', payload)
    return this.processResponse(response)
  }

  /////////////////////// Tests ////////////////
  /**
   * Get all exams.
   */
  getAllExams = async () => {
    const response = await this.api.get('exams')
    return this.processResponse(response)
  }
  /**
   * Get the specific exam.
   */
  getExam = async (id: number) => {
    const response = await this.api.get(`exams/${id}`)
    return this.processResponse(response)
  }
  /**
   * Delete the specific exam.
   */
  deleteExam = async (id: number) => {
    const response = await this.api.delete(`exams/${id}`)
    return this.processResponse(response)
  }
  /**
   * Create a exam
   */
  creatExam = async payload => {
    const response = await this.api.post('exams', payload)
    return this.processResponse(response)
  }
}
