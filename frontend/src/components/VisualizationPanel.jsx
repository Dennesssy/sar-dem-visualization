import './VisualizationPanel.css'

const VisualizationPanel = ({ file }) => {
  return (
    <div className="visualization-panel">
      <h3>File Information</h3>
      
      <div className="file-info">
        <div className="info-item">
          <label>File Name:</label>
          <span>{file.originalName}</span>
        </div>
        
        <div className="info-item">
          <label>File Size:</label>
          <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
        </div>
        
        <div className="info-item">
          <label>Status:</label>
          <span className="status uploaded">Uploaded</span>
        </div>
      </div>

      <div className="controls">
        <h4>Visualization Controls</h4>
        
        <div className="control-group">
          <label>Elevation Scale:</label>
          <input 
            type="range" 
            min="0.1" 
            max="5" 
            step="0.1" 
            defaultValue="1"
            className="slider"
          />
        </div>
        
        <div className="control-group">
          <label>Wireframe:</label>
          <input type="checkbox" />
        </div>
        
        <div className="control-group">
          <label>Color Map:</label>
          <select className="select">
            <option value="terrain">Terrain</option>
            <option value="elevation">Elevation</option>
            <option value="grayscale">Grayscale</option>
          </select>
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-primary">
          Process Data
        </button>
        <button className="btn btn-secondary">
          Reset View
        </button>
      </div>
    </div>
  )
}

export default VisualizationPanel