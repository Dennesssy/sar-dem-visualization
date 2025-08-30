const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads'
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SAR-DEM Visualization API is running' })
})

// File upload endpoint for GeoTIFF files
app.post('/api/upload', upload.single('geotiff'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    res.json({
      message: 'File uploaded successfully',
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      path: req.file.path
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'File upload failed' })
  }
})

// GeoTIFF processing endpoint (placeholder for future implementation)
app.get('/api/process/:filename', (req, res) => {
  try {
    const { filename } = req.params
    const filePath = path.join(__dirname, '../uploads', filename)

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' })
    }

    // TODO: Implement GeoTIFF processing using geotiff library
    // This would include reading the file, extracting elevation data,
    // and returning processed data for 3D visualization
    
    res.json({
      message: 'File processing endpoint',
      filename,
      status: 'pending',
      note: 'Processing implementation coming soon'
    })
  } catch (error) {
    console.error('Processing error:', error)
    res.status(500).json({ error: 'File processing failed' })
  }
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`SAR-DEM Visualization API running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/api/health`)
})

module.exports = app