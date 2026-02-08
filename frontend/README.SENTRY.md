Sentry Integration (frontend)

- To enable Sentry for the frontend, set `VITE_SENTRY_DSN` in your environment (Render dashboard or .env for local).
- We added optional initialization in `src/main.jsx` which will only run if `VITE_SENTRY_DSN` is present.
- Recommended DSN via Sentry project settings.
