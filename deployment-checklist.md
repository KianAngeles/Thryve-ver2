# 🚀 Thryve Deployment Checklist

## ✅ Phase 1: Code Preparation (COMPLETED)
- [x] Git repository initialized
- [x] Code committed to GitHub
- [x] Deployment configurations created
- [x] GitHub authentication successful
- [x] Code pushed to https://github.com/KianAngeles/Thryve-ver2.git

## 🔄 Phase 2: Backend Deployment (IN PROGRESS)

### Railway Deployment Steps:
1. [ ] Go to https://railway.app
2. [ ] Sign in with GitHub (KianAngeles account)
3. [ ] Click "New Project"
4. [ ] Select "Deploy from GitHub repo"
5. [ ] Choose "Thryve-ver2" repository
6. [ ] Set root directory to "thryve-backend"
7. [ ] Wait for initial deployment

### Railway Environment Variables:
Add these in Railway Dashboard → Variables:
```
NODE_ENV=production
MONGO_URI=mongodb+srv://thryve_dev:JW31uq6zxVLzPx5w@cluster0.ppkfxde.mongodb.net/thryveDB?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=8c7dfe1a0a4f1b6d92c4a1e3e7f58b26f37a4e7b2c8f91d03d64a9cce7a9d0a1
JWT_EXPIRES_IN=7d
EMAIL_USER=thryve.noreply@gmail.com
EMAIL_PASS=xkmc lgdu zxie qxlv
```

8. [ ] Copy Railway deployment URL (something like: https://thryve-backend-production.railway.app)
9. [ ] Test backend health check: [Railway-URL]/api/health

## 🔄 Phase 3: Frontend Deployment

### Vercel Deployment Steps:
1. [ ] Go to https://vercel.com
2. [ ] Sign in with GitHub (KianAngeles account)  
3. [ ] Click "Add New" → "Project"
4. [ ] Import "Thryve-ver2" repository
5. [ ] Configure project settings:
   - Framework Preset: Vite
   - Root Directory: thryve-frontend
   - Build Command: npm run build
   - Output Directory: dist
6. [ ] Add Environment Variable:
   ```
   VITE_API_URL=https://[RAILWAY-BACKEND-URL]/api
   ```
7. [ ] Deploy project
8. [ ] Copy Vercel deployment URL

## 🔄 Phase 4: Update CORS Configuration

Update Railway environment variables with frontend URL:
```
FRONTEND_ORIGIN=https://[VERCEL-FRONTEND-URL]
FRONTEND_URL=https://[VERCEL-FRONTEND-URL]
```

## 🧪 Phase 5: Production Testing

### Test Checklist:
- [ ] Backend health check: [Railway-URL]/api/health
- [ ] Frontend loads: [Vercel-URL]
- [ ] User registration works
- [ ] User login works
- [ ] Dashboard loads with data
- [ ] Workout tracking works
- [ ] Meal tracking works
- [ ] Water tracking works
- [ ] Sleep tracking works
- [ ] Achievements system works

## 🌐 Phase 6: Optional Enhancements

- [ ] Custom domain setup
- [ ] SSL certificate (automatic with Vercel)
- [ ] Performance monitoring
- [ ] Error tracking setup

## 📋 Deployment URLs

Fill these in as you complete deployment:

**Backend (Railway)**: `___________________________`

**Frontend (Vercel)**: `___________________________`

**MongoDB Atlas**: `✅ Already configured`

## 🆘 Troubleshooting

### Common Issues:
1. **Build failures**: Check build logs in Railway/Vercel
2. **CORS errors**: Verify FRONTEND_ORIGIN matches Vercel URL
3. **Environment variables**: Double-check all variables are set correctly
4. **Database connection**: Verify MongoDB Atlas allows connections from 0.0.0.0/0

### Support Links:
- Railway Docs: https://docs.railway.app/
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com/

---

**Next Step**: Start with Railway backend deployment!