import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Sentry: optional error monitoring (set VITE_SENTRY_DSN in environment to enable)
const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
if (sentryDsn) {
  try {
    // Lazy import to avoid adding runtime when not configured
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Sentry = require("@sentry/react");
    const { BrowserTracing } = require("@sentry/tracing");
    Sentry.init({
      dsn: sentryDsn,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 0.05,
    });
  } catch (e) {
    // ignore if Sentry not installed in some environments
    // console.warn("Sentry init failed:", e);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
