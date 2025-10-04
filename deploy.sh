#!/bin/bash

# Thryve Deployment Script
echo "🚀 Starting Thryve Deployment Process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Thryve MEVN app"
fi

echo "📋 Deployment Options:"
echo "1. Quick Deploy (Vercel + Railway)"
echo "2. Netlify + Railway"  
echo "3. Full Vercel (Frontend + Serverless Backend)"
echo ""

read -p "Choose deployment option (1-3): " choice

case $choice in
    1)
        echo "🎯 Option 1: Vercel Frontend + Railway Backend"
        echo ""
        echo "📝 Step-by-step instructions:"
        echo "1. Create MongoDB Atlas account: https://www.mongodb.com/cloud/atlas"
        echo "2. Deploy backend to Railway: https://railway.app"
        echo "   - Connect this GitHub repo"
        echo "   - Select 'thryve-backend' folder"
        echo "   - Add environment variables"
        echo "3. Deploy frontend to Vercel: https://vercel.com"
        echo "   - Connect this GitHub repo"
        echo "   - Select 'thryve-frontend' folder"
        echo "   - Set VITE_API_URL to Railway backend URL"
        ;;
    2)
        echo "🎯 Option 2: Netlify Frontend + Railway Backend"
        echo ""
        echo "📝 Step-by-step instructions:"
        echo "1. Create MongoDB Atlas account"
        echo "2. Deploy backend to Railway"
        echo "3. Deploy frontend to Netlify: https://netlify.com"
        echo "   - Connect GitHub repo"
        echo "   - Build command: npm run build"
        echo "   - Publish directory: dist"
        echo "   - Base directory: thryve-frontend"
        ;;
    3)
        echo "🎯 Option 3: Full Vercel Deployment"
        echo ""
        echo "📝 This requires converting backend to serverless functions"
        echo "⚠️  More complex setup - recommend Option 1 for beginners"
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "🔧 Required Environment Variables:"
echo ""
echo "Backend (.env):"
echo "MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/thryve"
echo "JWT_SECRET=your-super-secret-jwt-key-here-at-least-32-characters-long"
echo "JWT_EXPIRES_IN=7d"
echo "FRONTEND_ORIGIN=https://your-frontend-url.domain.app"
echo "FRONTEND_URL=https://your-frontend-url.domain.app"
echo "EMAIL_USER=your-email@gmail.com"
echo "EMAIL_PASS=your-app-password"
echo "NODE_ENV=production"
echo ""
echo "Frontend (.env):"
echo "VITE_API_URL=https://your-backend-url.domain.app/api"
echo ""
echo "✅ Next steps:"
echo "1. Push this code to GitHub"
echo "2. Follow the platform-specific instructions above"
echo "3. Set environment variables in each platform's dashboard"
echo "4. Test your deployed application!"
echo ""
echo "📖 Full guide available in: deployment-guide.md"