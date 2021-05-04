import supertest from 'supertest'

import app from './app'

describe('Initial Tests', () => {
  let request: supertest.SuperTest<supertest.Test>

  beforeEach(() => {
    request = supertest(app)
  })

  describe('GET /', () => {
    it('Should return Hello message', async () => {
      const response = await request.get('/')
      expect(response.body.message).toBe('Hello!!')
    })

    it('Should return status 200', async () => {
      const response = await request.get('/')
      expect(response.status).toBe(200)
    })
  })
})
