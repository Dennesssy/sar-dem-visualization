const request = require('supertest')
const app = require('../server')

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200)

      expect(response.body).toHaveProperty('status', 'OK')
      expect(response.body).toHaveProperty('message')
    })
  })

  describe('POST /api/upload', () => {
    it('should handle file upload', async () => {
      // This would need a test file for proper testing
      const response = await request(app)
        .post('/api/upload')
        .expect(400) // Expecting 400 because no file is uploaded

      expect(response.body).toHaveProperty('error', 'No file uploaded')
    })
  })

  describe('GET /api/process/:filename', () => {
    it('should return 404 for non-existent file', async () => {
      const response = await request(app)
        .get('/api/process/nonexistent.tif')
        .expect(404)

      expect(response.body).toHaveProperty('error', 'File not found')
    })
  })
})
