# SAR-DEM Visualization

React + Node.js application for SAR and DEM data visualization using Three.js for structure identification and analysis.

## Overview

This application provides a web-based interface for uploading, processing, and visualizing SAR (Synthetic Aperture Radar) and DEM (Digital Elevation Model) data. It uses Three.js for 3D rendering and supports GeoTIFF file formats.

## Features

- 📁 **File Upload**: Drag & drop or click to upload GeoTIFF files
- 🌐 **3D Visualization**: Interactive 3D terrain visualization using Three.js
- ⚙️ **Real-time Controls**: Adjust elevation scale, wireframe mode, and color maps
- 🎨 **Multiple Color Maps**: Terrain, elevation, and grayscale visualization modes
- 📊 **Data Processing**: Backend API for GeoTIFF processing and analysis

## Tech Stack

### Frontend
- React 18
- Three.js with React Three Fiber
- Vite (build tool)
- Vitest (testing)
- ESLint (linting)

### Backend
- Node.js with Express
- GeoTIFF.js for spatial data processing
- Multer for file uploads
- Jest (testing)
- ESLint (linting)

## Project Structure

```
sar-dem-visualization/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── test/           # Test configuration
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── __tests__/      # API tests
│   │   └── server.js       # Express server
│   ├── package.json
│   └── jest.config.js
├── COPILOT.md              # Technical implementation guide
└── package.json            # Root package configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dennesssy/sar-dem-visualization.git
cd sar-dem-visualization
```

2. Install dependencies for all packages:
```bash
npm run install:all
```

### Development

Start both frontend and backend in development mode:
```bash
npm run dev
```

This will start:
- Frontend development server on http://localhost:3000
- Backend API server on http://localhost:3001

### Individual Services

Start only the frontend:
```bash
npm run dev:frontend
```

Start only the backend:
```bash
npm run dev:backend
```

### Building

Build both frontend and backend:
```bash
npm run build
```

### Testing

Run all tests:
```bash
npm test
```

Run tests for individual services:
```bash
npm run test:frontend
npm run test:backend
```

### Linting

Run linting for all code:
```bash
npm run lint
```

## Usage

1. **Start the application** using `npm run dev`
2. **Open your browser** to http://localhost:3000
3. **Upload a GeoTIFF file** using the drag & drop interface
4. **Adjust visualization settings** using the control panel
5. **Interact with the 3D visualization** using mouse controls:
   - Left click + drag: Rotate view
   - Right click + drag: Pan view
   - Scroll: Zoom in/out

## Supported File Formats

- `.tif` - Tagged Image File Format
- `.tiff` - Tagged Image File Format (alternative extension)
- `.geotiff` - GeoTIFF format

## API Endpoints

### Health Check
```
GET /api/health
```
Returns the API status.

### File Upload
```
POST /api/upload
```
Upload a GeoTIFF file for processing.

### Process File
```
GET /api/process/:filename
```
Process an uploaded GeoTIFF file (implementation pending).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D rendering
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React integration
- [GeoTIFF.js](https://geotiffjs.github.io/) for spatial data processing
