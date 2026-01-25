vQuick start (Docker recommended)

Prereqs:
- Docker & Docker Compose installed on your machine
- (Optional) Node & npm if you prefer local runs

Run with Docker Compose

Open PowerShell in the project root and run:

```powershell
docker compose up --build
```

This starts:
- MongoDB on port 27017
- Backend on port 5000
- Frontend served on http://localhost:5173 (mapped to nginx:80)

Local (non-Docker) quick steps

Backend:
```powershell
cd backend
npm install
# ensure backend/.env has a valid MONGO_URI
npm run dev
```

Frontend:
```powershell
cd frontend
npm install
npm run dev
```

If you want me to run Docker Compose here, tell me and I'll try—note I can't guarantee Docker is available in this environment.
