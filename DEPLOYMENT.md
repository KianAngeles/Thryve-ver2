# 🚀 Thryve Deployment Instructions

## Prerequisites
1. GitHub account
2. Vercel account (sign up with GitHub)
3. Railway account (sign up with GitHub)

## Step-by-Step Deployment

### 1. Push to GitHub
```bash
# Initialize git and commit code
git init
git add .
git commit -m "Initial commit - Thryve MEVN app ready for deployment"

# Create GitHub repository and push
# Go to github.com and create new repository "thryve-app"
git remote add origin https://github.com/YOUR_USERNAME/thryve-app.git
git branch -M main
git push -u origin main
```

### 2. Deploy Backend to Railway
1. Go to [Railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `thryve-app` repository
5. Select "thryve-backend" as the root directory
6. Railway will auto-detect Node.js and deploy

#### Environment Variables for Railway:
```
NODE_ENV=production
MONGO_URI=mongodb+srv://thryve_dev:JW31uq6zxVLzPx5w@cluster0.ppkfxde.mongodb.net/thryveDB?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=8c7dfe1a0a4f1b6d92c4a1e3e7f58b26f37a4e7b2c8f91d03d64a9cce7a9d0a1
JWT_EXPIRES_IN=7d
FRONTEND_ORIGIN=https://your-app-name.vercel.app
FRONTEND_URL=https://your-app-name.vercel.app
EMAIL_USER=thryve.noreply@gmail.com
EMAIL_PASS=xkmc lgdu zxie qxlv
```

7. After deployment, note your Railway URL: `https://your-backend.railway.app`

### 3. Deploy Frontend to Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Set Root Directory to "thryve-frontend"
5. Set Build Command to "npm run build"
6. Set Output Directory to "dist"

#### Environment Variables for Vercel:
```
VITE_API_URL=https://your-backend.railway.app/api
```

### 4. Update CORS Settings
After getting your Vercel URL, update Railway environment variables:
```
FRONTEND_ORIGIN=https://your-app-name.vercel.app
FRONTEND_URL=https://your-app-name.vercel.app
```

### 5. Test Deployment
1. Visit your Vercel URL
2. Test user registration
3. Test login functionality
4. Verify all features work

## Expected URLs
- **Frontend**: https://your-app-name.vercel.app
- **Backend**: https://your-backend.railway.app
- **Health Check**: https://your-backend.railway.app/api/health

## Troubleshooting
- Check Railway logs for backend issues
- Check Vercel function logs for frontend issues
- Verify environment variables are set correctly
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)