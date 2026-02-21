# Contact form email troubleshooting

If contact submissions are saved to MongoDB but you don't receive an email:

## 1. Check that the server has email configured

**For this app (single service "lab2market" on Render):** your backend/API is at **https://lab2market.onrender.com**. Open:

**https://lab2market.onrender.com/api/facilitation/contact-email-status**

(If you use a different backend URL, replace the base accordingly.)

You should see `"emailConfigured": true`. If it's `false`, the server is not loading `EMAIL_USER` and `EMAIL_PASS`.

- **Local:** Ensure `backend/.env` exists and has `EMAIL_USER` and `EMAIL_PASS` (and restart the server).
- **Render / other host:** Set **Environment** variables in the dashboard (not in a file). Add `EMAIL_USER`, `EMAIL_PASS`, and optionally `CONTACT_NOTIFICATION_EMAIL` (where you want to receive notifications). Redeploy after changing env.

## 2. Use a Gmail App Password

- Normal Gmail password will **not** work.
- Turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification).
- Create an [App Password](https://myaccount.google.com/apppasswords) and use that 16-character value as `EMAIL_PASS` (no spaces).

## 3. Check server logs after submitting the form

After a test submit, check your backend logs. You should see either:

- `Contact form: sending notification to ...` then `Contact form: email sent successfully to ...`
- Or an error line, e.g.:
  - `EMAIL_USER or EMAIL_PASS missing` → set env vars and redeploy.
  - `EAUTH` / `535` → use an App Password, not your normal password.
  - `ECONNREFUSED` / `ETIMEDOUT` → SMTP may be blocked on the host; try another provider or host.

## 4. Where notifications are sent

Emails are sent to `CONTACT_NOTIFICATION_EMAIL` if set, otherwise `amansurana5454@gmail.com`. Set `CONTACT_NOTIFICATION_EMAIL` to your own address if you want them in your inbox.
