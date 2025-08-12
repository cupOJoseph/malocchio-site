#!/usr/bin/env node

/**
 * Build script to prepare the project for deployment
 * This script ensures compatibility with both static and autoscale deployments
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔧 Preparing deployment files...');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(distDir, 'public');

if (!fs.existsSync(distDir)) {
  console.error('❌ Build files not found. Run "npm run build" first.');
  process.exit(1);
}

// For static deployment compatibility: copy files to dist root
try {
  // Copy index.html to dist root for static deployment
  if (fs.existsSync(path.join(publicDir, 'index.html'))) {
    fs.copyFileSync(
      path.join(publicDir, 'index.html'),
      path.join(distDir, 'index.html')
    );
    console.log('✅ Copied index.html to dist root');
  }

  // Copy assets directory to dist root for static deployment
  const assetsDir = path.join(publicDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const targetAssetsDir = path.join(distDir, 'assets');
    
    // Remove existing assets dir if it exists
    if (fs.existsSync(targetAssetsDir)) {
      fs.rmSync(targetAssetsDir, { recursive: true });
    }
    
    // Copy assets recursively
    fs.cpSync(assetsDir, targetAssetsDir, { recursive: true });
    console.log('✅ Copied assets to dist root');
  }

  console.log('🎉 Deployment preparation complete!');
  console.log('');
  console.log('📁 Final structure:');
  console.log('  dist/');
  console.log('  ├── index.js          (Express server)');
  console.log('  ├── index.html        (For static deployment)');
  console.log('  ├── assets/           (For static deployment)');
  console.log('  └── public/');
  console.log('      ├── index.html    (For server deployment)');
  console.log('      └── assets/       (For server deployment)');

} catch (error) {
  console.error('❌ Error preparing deployment:', error.message);
  process.exit(1);
}