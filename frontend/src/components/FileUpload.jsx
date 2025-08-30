import { useRef } from 'react'
import axios from 'axios'
import './FileUpload.css'

const FileUpload = ({ onFileUpload, isLoading }) => {
  const fileInputRef = useRef(null)

  const handleFileSelect = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Basic validation for GeoTIFF files
    const allowedExtensions = ['.tif', '.tiff', '.geotiff']
    const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'))
    
    if (!allowedExtensions.includes(fileExtension)) {
      alert('Please select a valid GeoTIFF file (.tif, .tiff, .geotiff)')
      return
    }

    try {
      const formData = new FormData()
      formData.append('geotiff', file)

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      onFileUpload({
        ...response.data,
        originalFile: file
      })
    } catch (error) {
      console.error('Upload failed:', error)
      alert('File upload failed. Please try again.')
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files.length > 0) {
      const fakeEvent = { target: { files } }
      handleFileSelect(fakeEvent)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div className="file-upload">
      <h3>Upload GeoTIFF File</h3>
      
      <div 
        className={`upload-area ${isLoading ? 'loading' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="upload-content">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Uploading...</p>
            </div>
          ) : (
            <>
              <div className="upload-icon">📁</div>
              <p>Click to select or drag & drop</p>
              <p className="file-types">Supported: .tif, .tiff, .geotiff</p>
            </>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".tif,.tiff,.geotiff"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default FileUpload