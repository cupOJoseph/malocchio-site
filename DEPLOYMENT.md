# Deployment Guide

## Overview
This application supports both **Static** and **Autoscale** deployment methods on Replit.

## Current Configuration
- **Deployment Type**: Static (configured in `.replit`)
- **Build Command**: `npm run build`
- **Public Directory**: `dist`

## Deployment Process

### Important: Always Rebuild Before Deploying
When you make code changes (like adding wallet functionality), you MUST rebuild before deploying:

### 1. Build the Application
```bash
npm run build
```
This creates:
- `dist/index.js` - Express server
- `dist/public/` - Frontend files (React app)
- All new features and changes are included

### 2. Prepare for Deployment
```bash
node build-deploy.js
```
This script:
- Copies `index.html` to `dist/` root for static deployment compatibility
- Copies `assets/` directory to `dist/` root for static deployment compatibility
- Maintains `dist/public/` structure for autoscale deployment compatibility
- **CRITICAL**: This step ensures your latest changes appear in deployment

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
**IMPORTANT**: After making any code changes, follow these steps:

1. **Build**: `npm run build`
2. **Prepare**: `node build-deploy.js`
3. **Deploy**: Click "Deploy" in Replit
4. Your application with all latest changes will be available at the generated URL

## Troubleshooting Deployment Issues

### Changes Not Showing in Deployed Version
**Problem**: Your wallet changes or manual edits aren't appearing in the deployed site.

**Solution**: 
1. Always run `npm run build` after making changes
2. Run `node build-deploy.js` to prepare deployment files
3. Then deploy - this ensures the build includes your latest code

### Build Process
- The build process compiles all React components, including new wallet functionality
- Skipping the build step means deployment uses old cached files
- The preparation script ensures compatibility with both static and autoscale deployments

## Notes
- Static deployment only serves the frontend
- For full-stack functionality, use autoscale deployment
- The build process is optimized for both deployment types