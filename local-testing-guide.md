# 🧪 Local Testing Guide for Thryve Application

## ✅ Current Status
- **Backend**: ✅ Running on http://localhost:3001
- **Frontend**: ✅ Running on http://localhost:5173  
- **Database**: ✅ Connected to MongoDB Atlas
- **Environment**: ✅ Configured properly

## 🚀 **Your Application is Live Locally!**

Open your browser and go to: **http://localhost:5173**

## 🧪 **Testing Checklist**

### 1. **Homepage & Navigation** ✅
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Responsive design on different screen sizes

### 2. **User Authentication** 🔐
- [ ] **Register**: Create a new account
  - Enter name, email, password
  - Check for validation messages
  - Should redirect to dashboard after registration
- [ ] **Login**: Use the account you just created
  - Test with correct credentials
  - Test with wrong credentials (should show error)
- [ ] **Password Reset**: Test forgot password flow
  - Enter email and check console/logs for reset link
- [ ] **Logout**: Should clear session and redirect to homepage

### 3. **Core Features** 🏋️
- [ ] **Dashboard**: View analytics and summary
- [ ] **Profile**: Update user information (age, weight, height)
- [ ] **Workout Tracking**: 
  - Add new workout
  - View workout history
  - Edit/delete workouts
- [ ] **Meal Tracking**:
  - Add new meal
  - View meal history
  - Edit/delete meals
- [ ] **Water Tracker**: Log water intake
- [ ] **Sleep Tracker**: Log sleep data
- [ ] **Achievements**: View earned achievements

### 4. **API Endpoints Testing** 🔌

#### Quick API Tests (using browser console or Postman):

```javascript
// Test health endpoint
fetch('http://localhost:3001/api/health')
  .then(res => res.json())
  .then(data => console.log('Health check:', data));

// Test registration (modify email to avoid duplicates)
fetch('http://localhost:3001/api/auth/register', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name: 'Test User',
    email: 'test' + Date.now() + '@example.com',
    password: 'password123',
    age: 25,
    weight: 70,
    height: 175
  })
}).then(res => res.json()).then(data => console.log('Registration:', data));
```

## 🔍 **Common Issues & Solutions**

### Backend Issues:
- **"ECONNREFUSED"**: Backend not running → Check terminal for errors
- **"CORS Error"**: Check FRONTEND_ORIGIN in .env matches frontend URL
- **"MongoDB connection failed"**: Check MONGO_URI in .env

### Frontend Issues:
- **"Network Error"**: Check VITE_API_URL in .env points to backend
- **White screen**: Check browser console for errors
- **Components not loading**: Check Vue.js console errors

## 🌐 **Testing Different Scenarios**

### 1. **New User Journey**:
1. Register new account
2. Complete profile setup
3. Add first workout
4. Add first meal
5. Check dashboard updates

### 2. **Data Persistence**:
1. Add some data (workouts, meals)
2. Refresh browser
3. Log out and log back in
4. Verify data is still there

### 3. **Error Handling**:
1. Try invalid login credentials
2. Submit forms with missing data
3. Try accessing protected routes without login

## 📊 **Performance Testing**

- [ ] Page load times (should be < 3 seconds)
- [ ] API response times (should be < 1 second)
- [ ] Large data sets (add 10+ workouts/meals)
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

## 🎯 **Ready for Deployment?**

✅ **If all tests pass**, your app is ready for deployment!

### Pre-deployment Checklist:
- [ ] All features working locally
- [ ] No console errors
- [ ] Authentication flow complete
- [ ] Data persists correctly
- [ ] Responsive design tested
- [ ] API endpoints responding correctly

## 🚀 **Next Steps**

Once local testing is complete:
1. **Push code to GitHub**
2. **Set up MongoDB Atlas for production** (if using different cluster)
3. **Deploy using the deployment guide**
4. **Test deployed version**

---

## 🔧 **Development Commands**

```bash
# Backend (Terminal 1)
cd thryve-backend
npm run dev

# Frontend (Terminal 2)  
cd thryve-frontend
npm run dev

# Stop servers
# Ctrl+C in each terminal
```

## 📝 **Environment Variables**

### Backend (.env) ✅
```
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=...
FRONTEND_ORIGIN=http://localhost:5173
```

### Frontend (.env) ✅
```
VITE_API_URL=http://localhost:3001/api
```

Happy testing! 🎉