# Deployment Guide

## Overview
This application supports both **Static** and **Autoscale** deployment methods on Replit.

## Current Configuration
- **Deployment Type**: Static (configured in `.replit`)
- **Build Command**: `npm run build`
- **Public Directory**: `dist`

## Deployment Process

### 1. Build the Application
```bash
npm run build
```
This creates:
- `dist/index.js` - Express server
- `dist/public/` - Frontend files (React app)

### 2. Prepare for Deployment
```bash
node build-deploy.js
```
This script:
- Copies `index.html` to `dist/` root for static deployment compatibility
- Copies `assets/` directory to `dist/` root for static deployment compatibility
- Maintains `dist/public/` structure for autoscale deployment compatibility

### 3. Final Structure
```
dist/
├── index.js          # Express server (for autoscale)
├── index.html        # Main HTML file (for static)
├── assets/           # CSS/JS assets (for static)
└── public/           # Full frontend build (for autoscale)
    ├── index.html
    └── assets/
```

## Deployment Methods

### Static Deployment (Current)
- Uses files directly from `dist/` directory
- No server-side processing
- Frontend-only functionality
- **Limitation**: API routes won't work

### Autoscale Deployment (Recommended)
To switch to autoscale deployment:
1. Change deployment type in Replit settings to "Autoscale"
2. Set start command to: `node dist/index.js`
3. Full-stack functionality with API routes

## Environment Variables
Required for production:
- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (automatically set by Replit)

## Troubleshooting

### "Could not find index.html"
- Ensure you ran `npm run build` followed by `node build-deploy.js`
- Check that `dist/index.html` exists

### "Build creates files in dist/public but deployment looks in dist"
- This is resolved by the `build-deploy.js` script
- The script copies necessary files to both locations

### API Routes Not Working
- This happens with static deployment
- Switch to autoscale deployment for full functionality

## Manual Deployment Steps
1. Run `npm run build`
2. Run `node build-deploy.js`
3. Click "Deploy" in Replit
4. Your application will be available at the generated URL

## Notes
- Static deployment only serves the frontend
- For full-stack functionality, use autoscale deployment
- The build process is optimized for both deployment types