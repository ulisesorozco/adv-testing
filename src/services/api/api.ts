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
        Host: 'advtesting.trippple.co',
        app_id: '123',
        app_key: 'abc',
      },
      timeout: 100000,
    })
  }

  /** Will be called before any React components are initialized. */
  async setup() {
    // Initialize functionalities here
  }

  setupToken(newToken: string) {
    this.token = newToken
    this.api.setHeader('Authorization', `Bearer ${this.token}`)
  }

  processResponse = response => {
    if (response.ok) {
      console.log('--------------->   ', response.data)
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
    } else {
      console.log('ERROR --->>>   ', response)
    }

    return {
      ok: false,
      status: response.status,
      kind: 'unknown-error',
    }
  }

  /////////////////////// Login/Register ////////////////
  login = async payload => {
    const response = await this.api.post('login', payload)
    return this.processResponse(response)
  }
  register = async payload => {
    const response = await this.api.post('register', payload)
    return this.processResponse(response)
  }

  /////////////////////// Instructors ////////////////
  /**
   * Get all instructors.
   */
  getAllInstructors = async () => {
    const response = await this.api.get('users')
    return this.processResponse(response)
  }
  /**
   * Get the specific instructor.
   */
  getInstructor = async () => {
    const response = await this.api.get('users')
    return this.processResponse(response)
  }
  /**
   * Delete the specific instructor.
   */
  deleteInstructor = async () => {
    const response = await this.api.delete('users')
    return this.processResponse(response)
  }
  /**
   * Create a instructor
   */
  createInstructor = async payload => {
    const response = await this.api.post('users', payload)
    return this.processResponse(response)
  }

  /////////////////////// Users ////////////////
  /**
   * Get all users.
   */
  getAllUsers = async () => {
    const response = await this.api.get('users')
    return this.processResponse(response)
  }
  /**
   * Get the specific student.
   */
  getUser = async (id: number) => {
    const response = await this.api.get(`users/${id}`)
    return this.processResponse(response)
  }
  /**
   * Delete the specific student.
   */
  deleteUser = async (id: number) => {
    const response = await this.api.delete(`users/${id}`)
    return this.processResponse(response)
  }
  /**
   * Create a student
   */
  creatUser = async payload => {
    const response = await this.api.post('users', payload)
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
  /**
   * Update a exam
   */
  updateExam = async payload => {
    const response = await this.api.put('exams', payload)
    return this.processResponse(response)
  }
  /**
   * Upload images
   */
  uploads = async payload => {
    const response = await this.api.post('uploads', payload)
    return this.processResponse(response)
  }
  /**
   * Start process
   */
  startProcess = async payload => {
    const response = await this.api.post('start_process', payload)
    return this.processResponse(response)
  }
  /**
   * Get results
   */
  results = async payload => {
    const response = await this.api.get(`exams/${payload.id}/results?show_details=1`, payload)
    return this.processResponse(response)
  }
  /**
   * Get exam types.
   */
  getExamTypes = async () => {
    const response = await this.api.get('get_exam_types')
    return this.processResponse(response)
  }
  /**
   * Get exam sections.
   */
  getExamSections = async payload => {
    const response = await this.api.post('get_exam_sections', payload)
    return this.processResponse(response)
  }

  sendEmail = async payload => {
    const response = await this.api.post('exams/1/email_pdf', {
      email: 'hiroki.moto.pro@gmail.com',
    })
    return this.processResponse(response)
  }
}
