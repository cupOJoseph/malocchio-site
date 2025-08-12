#!/bin/bash

echo "🚀 Starting deployment preparation..."

# Step 1: Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

# Step 2: Prepare deployment files
echo "🔧 Preparing deployment files..."
node build-deploy.js

# Check if preparation was successful
if [ $? -ne 0 ]; then
    echo "❌ Deployment preparation failed!"
    exit 1
fi

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Click 'Deploy' in Replit"
echo "2. Your updated app with wallet functionality will be deployed"
echo ""
echo "🔍 Build summary:"
echo "- Frontend files built to dist/public/"
echo "- Server built to dist/index.js"
echo "- Static deployment files copied to dist/"
echo "- All wallet changes included in build"