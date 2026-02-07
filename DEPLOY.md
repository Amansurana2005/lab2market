# Deploy Lab2Market to Render - Step by Step

## Prerequisites
- GitHub account (free)
- MongoDB Atlas account (free)
- Render account (free)

## Step 1: Create a MongoDB Database (5 min)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click **"Sign Up"** (or Sign In)
3. Create a **Free Cluster** (M0)
4. Go to **Network Access** → Add `0.0.0.0/0` (allows any IP)
5. Go to **Database Access** → Create username & password
6. Click **"Connect"** → Choose **"Connect your application"**
7. Copy the connection string: `mongodb+srv://username:password@cluster.mongodb.net/lab2market`
8. **Save this string** - you'll need it in Step 3

## Step 2: Push Code to GitHub (5 min)

1. Go to https://github.com/new
2. Create a new repository: `lab2market`
3. In your local folder, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lab2market.git
git push -u origin main
```

## Step 3: Deploy on Render (10 min)

1. Go to https://render.com and **Sign Up**
2. Click **"New +"** → **"Blueprint"**
3. Paste your GitHub repo URL and click **"Connect"**
4. Render will auto-detect `render.yaml` and create 2 services
5. Add these **Environment Variables**:

   **For `lab2market-backend` service:**
   - `MONGO_URI` = (paste from Step 1)
   - `JWT_SECRET` = (make up any random string, like: `MySecretKey12345`)
   - `FRONTEND_URL` = (leave blank, will auto-set)
   
6. Click **"Deploy"**
7. Wait 3-5 minutes for both services to build

## Step 4: Get Your Live URLs

After deployment completes:
- **Frontend:** `https://lab2market-frontend.onrender.com`
- **Backend:** `https://lab2market-backend.onrender.com`

Visit the frontend URL in your browser. It's live! 🎉

## Troubleshooting

**"Service won't deploy"**
- Check Render logs (click service → Logs tab)
- Make sure `MONGO_URI` is correct
- Ensure MongoDB Atlas allows connection from `0.0.0.0/0`

**"Frontend can't connect to backend"**
- Update `VITE_API_URL` env var in frontend service to match backend URL
- Make sure backend `FRONTEND_URL` matches frontend URL

**"Can't log in"**
- Check backend logs for JWT errors
- Ensure `JWT_SECRET` is set

## Local Testing

Before deploying, test locally:

```bash
# Create a .env file in backend/
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/lab2market
JWT_SECRET=test-secret
FRONTEND_URL=http://localhost:5173

# Create a .env file in frontend/
VITE_API_URL=http://localhost:5000/api

# Terminal 1
cd backend && npm install && npm start

# Terminal 2
cd frontend && npm install && npm run dev
```

Visit `http://localhost:5173`
