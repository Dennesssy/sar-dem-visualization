import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Box } from '@react-three/drei'
import FileUpload from './components/FileUpload'
import VisualizationPanel from './components/VisualizationPanel'
import './App.css'

function App() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = async (file) => {
    setIsLoading(true)
    try {
      // This will be implemented to handle actual GeoTIFF processing
      setUploadedFile(file)
      console.log('File uploaded:', file)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>SAR-DEM Visualization</h1>
        <p>Upload and visualize SAR and DEM data using Three.js</p>
      </header>

      <main className="app-main">
        <div className="control-panel">
          <FileUpload 
            onFileUpload={handleFileUpload}
            isLoading={isLoading}
          />
          
          {uploadedFile && (
            <VisualizationPanel file={uploadedFile} />
          )}
        </div>

        <div className="visualization-container">
          <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <ambientLight intensity={0.5} />
            {/* eslint-disable-next-line react/no-unknown-property */}
            <pointLight position={[10, 10, 10]} />
            
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            
            {/* Placeholder 3D content */}
            <Box position={[0, 0, 0]} args={[2, 0.1, 2]}>
              <meshStandardMaterial color="green" />
            </Box>
            
            <Text
              position={[0, 1, 0]}
              fontSize={0.5}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {uploadedFile ? 'GeoTIFF Loaded' : 'Upload GeoTIFF to visualize'}
            </Text>
          </Canvas>
        </div>
      </main>
    </div>
  )
}

export default App