# 🚀 Thryve Deployment Guide

## Free Deployment Options for Thryve MEVN Stack App

### 🌟 **Option 1: Vercel + MongoDB Atlas (Recommended)**

#### **Prerequisites:**
- GitHub account
- Vercel account (sign up with GitHub)
- MongoDB Atlas account

#### **Step 1: Database Setup (MongoDB Atlas)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account (512MB storage, no credit card required)
3. Create a new cluster (choose AWS/free tier)
4. Create database user and whitelist IP (0.0.0.0/0 for now)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/thryve`

#### **Step 2: Prepare Backend for Vercel**
1. Backend will deploy as Serverless Functions
2. Environment variables needed:
   - `MONGO_URI`
   - `JWT_SECRET` 
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `FRONTEND_URL`

#### **Step 3: Prepare Frontend**
1. Update API URLs to point to Vercel backend
2. Build for production

#### **Step 4: Deploy**
1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

---

### 🌟 **Option 2: Netlify + Railway**

#### **Backend on Railway:**
- Connect GitHub repo
- Auto-deploy on push
- Built-in environment variables
- Free 500 hours/month

#### **Frontend on Netlify:**
- Perfect for Vue.js static sites
- Auto-deploy from GitHub
- Custom domain support
- 100GB bandwidth/month free

---

### 🌟 **Option 3: Render (Full-Stack)**

#### **Why Render:**
- Free tier: 750 hours/month
- Auto-deploy from GitHub
- Built-in HTTPS
- Easy environment variables
- PostgreSQL/Redis add-ons

---

## 🔧 **Quick Setup Commands**

### For Vercel Deployment:
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### For Railway Deployment:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

---

## 📋 **Environment Variables Needed**

### Backend (.env):
```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/thryve
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
FRONTEND_ORIGIN=https://your-frontend-url.vercel.app
FRONTEND_URL=https://your-frontend-url.vercel.app
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### Frontend (.env):
```
VITE_API_URL=https://your-backend-url.vercel.app/api
```

---

## 🎯 **Recommended Deployment Strategy**

### **Phase 1: Quick Test (15 minutes)**
1. **Database**: MongoDB Atlas (free 512MB)
2. **Backend**: Vercel Serverless Functions
3. **Frontend**: Vercel Static Hosting

### **Phase 2: Production Ready**
1. **Domain**: Custom domain (free with Vercel)
2. **CDN**: Automatic with Vercel
3. **SSL**: Automatic HTTPS
4. **Monitoring**: Vercel Analytics

---

## 🚀 **Estimated Costs (All Free Tiers)**

| Service | Free Tier Limits | Upgrade Cost |
|---------|------------------|--------------|
| **MongoDB Atlas** | 512MB storage | $9/month for 2GB |
| **Vercel** | 100GB bandwidth | $20/month for team |
| **Netlify** | 100GB bandwidth | $19/month for pro |
| **Railway** | 750 hours/month | $5/month unlimited |
| **Render** | 750 hours/month | $7/month for pro |

---

## ⚡ **Quick Start - Vercel Deployment**

### 1. Update package.json scripts:
```json
{
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "cd thryve-frontend && npm run build",
    "build:backend": "cd thryve-backend && npm install"
  }
}
```

### 2. Create vercel.json:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "thryve-backend/src/server.js",
      "use": "@vercel/node"
    },
    {
      "src": "thryve-frontend/package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "thryve-backend/src/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "thryve-frontend/dist/$1"
    }
  ]
}
```

---

## 🔗 **Useful Links**

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Netlify Deployment](https://docs.netlify.com/)
- [Railway Documentation](https://docs.railway.app/)
- [Render Documentation](https://render.com/docs)

---

## 🆘 **Common Issues & Solutions**

### **CORS Issues:**
```javascript
// Update CORS in app.js
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-app.vercel.app'
  ],
  credentials: true
}));
```

### **Environment Variables:**
- Never commit .env files
- Use platform-specific env var settings
- Test locally first

### **Build Errors:**
- Check Node.js version compatibility
- Update dependencies
- Review build logs

---

## 🎯 **Next Steps After Deployment**

1. **Custom Domain** - Add your own domain
2. **Monitoring** - Set up error tracking
3. **Analytics** - Add user analytics
4. **Performance** - Optimize images and code
5. **SEO** - Add meta tags and sitemap