# COPILOT.md
## SAR/DEM Data Visualization with Three.js

This guide provides step-by-step instructions for visualizing SAR (Synthetic Aperture Radar) and DEM (Digital Elevation Model) data using Three.js, with a focus on loading GeoTIFF files and implementing solutions compatible with React and Node.js.

---

## Table of Contents

1. [Overview](#overview)
2. [Data Preprocessing](#data-preprocessing)
3. [3D Visualization Pipeline](#3d-visualization-pipeline)
4. [Landscape Structure Identification](#landscape-structure-identification)
5. [Segmentation Methods](#segmentation-methods)
6. [React/Node.js Integration](#reactnodejs-integration)
7. [References & Resources](#references--resources)

---

## Overview

- **Goal:** Visualize SAR/DEM data in 3D using Three.js.
- **Data Format:** GeoTIFF (raster format for geospatial data).
- **Tech Stack:** React (frontend), Node.js (backend), Three.js (3D rendering).

---

## Data Preprocessing

### 1. Loading GeoTIFF Files

- Use [`geotiff.js`](https://geotiffjs.github.io/) to read GeoTIFF files in Node.js or browser.
- Example (Node.js):
  ```js
  const GeoTIFF = require('geotiff');
  const fs = require('fs');

  async function loadGeoTIFF(path) {
    const buffer = fs.readFileSync(path);
    const tiff = await GeoTIFF.fromArrayBuffer(buffer.buffer);
    const image = await tiff.getImage();
    const raster = await image.readRasters();
    return raster[0]; // DEM elevation data
  }
  ```

- Example (React/browser):
  ```js
  import { fromUrl } from 'geotiff';

  async function loadGeoTIFF(url) {
    const tiff = await fromUrl(url);
    const image = await tiff.getImage();
    const raster = await image.readRasters();
    return raster[0];
  }
  ```

### 2. Normalizing Data

- Normalize elevation values for visualization:
  ```js
  function normalize(data) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return data.map(val => (val - min) / (max - min));
  }
  ```

### 3. Optional: Smoothing/Filtering

- Apply Gaussian blur or median filter for noise reduction (use libraries like `ndarray` or custom implementations).

---

## 3D Visualization Pipeline

### 1. Preparing Heightmap

- Convert normalized DEM data into a heightmap grid.
- Example: For a grid of size `width x height`, create a mesh where each vertex's z-value is the elevation.

### 2. Three.js Mesh Generation

- Use `THREE.PlaneGeometry` or `THREE.BufferGeometry` for custom meshes.
- Example:
  ```js
  import * as THREE from 'three';

  function createHeightMesh(data, width, height) {
    const geometry = new THREE.PlaneGeometry(width, height, width - 1, height - 1);
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      geometry.attributes.position.setZ(i, data[i] * scale); // scale = elevation factor
    }
    const material = new THREE.MeshPhongMaterial({ color: 0x88cc88, wireframe: false });
    return new THREE.Mesh(geometry, material);
  }
  ```

### 3. Rendering in React