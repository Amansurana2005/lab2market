# Render Deployment - Quick Start

Your app is ready to deploy! Follow these steps:

## Step 1: Create MongoDB Atlas Database (FREE)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up → Create a **Free M0 cluster**
3. Go to **Network Access** → Add `0.0.0.0/0`
4. Go to **Database Access** → Create a user (remember username/password)
5. Click **Connect** → Copy your connection string
6. Replace `<username>`, `<password>`, and `myFirstDatabase` with your values
7. Should look like: `mongodb+srv://user:pass@cluster.mongodb.net/lab2market`

## Step 2: Deploy on Render (5 minutes)
1. Go to https://render.com
2. Sign in with GitHub
3. Click **New** → **Blueprint**
4. Paste your GitHub repo URL (e.g., `https://github.com/YOUR-USERNAME/lab2market`)
5. Render auto-detects `render.yaml` and creates both services
6. Fill in these **environment variables** before deploying:

   **For `lab2market-backend`:**
   - `MONGO_URI` = Your MongoDB connection string from Step 1
   - `JWT_SECRET` = Any random string (e.g., `my-super-secret-2024`)
   - `FRONTEND_URL` = Leave blank (will auto-set)

7. Click **Deploy**
8. Wait 3-5 minutes for both services to build

## Step 3: You're Live!
- **Frontend**: https://lab2market-frontend.onrender.com
- **Backend**: https://lab2market-backend.onrender.com/api

## What's Fixed
✅ Register → Dashboard now works (no 404)
✅ Search projects → Select category now works (no 404)
✅ All navigation is client-side (smooth, instant)
✅ Frontend serves as SPA (routes render correctly)
✅ Backend CORS allows frontend URL

## Troubleshooting

**Frontend stuck on 404?**
- Go to frontend service → Logs
- Check for "error" messages
- Ensure `VITE_API_URL` env var matches backend URL

**Can't log in?**
- Check backend service Logs
- Verify `MONGO_URI` is correct
- Verify `JWT_SECRET` is set

**Backend won't connect to DB?**
- MongoDB Atlas → Verify IP `0.0.0.0/0` is allowed
- Check MONGO_URI format in env var

Questions? Check the logs in Render dashboard!
