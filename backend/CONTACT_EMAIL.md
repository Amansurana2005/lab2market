# Contact form email troubleshooting

If contact submissions are saved to MongoDB but you don't receive an email:

## 1. Check that the server has email configured

**For this app (single service "lab2market" on Render):** open:

**https://lab2market.onrender.com/api/facilitation/contact-email-status**

You should see `"emailConfigured": true` and `"emailMethod": "resend"` or `"smtp"`. If `emailConfigured` is `false`, add the env vars below and redeploy.

## 2. Recommended on Render: Use Resend (HTTPS — not blocked)

Render’s free tier often **blocks outbound SMTP** (Gmail), so you may see `ENETUNREACH` or `ESOCKET` in logs. Use **Resend** instead (sends over HTTPS):

1. Sign up at [resend.com](https://resend.com) (free tier available).
2. In the Resend dashboard, create an **API Key**.
3. In Render → **lab2market** service → **Environment**, add:
   - **RESEND_API_KEY** = your Resend API key (starts with `re_`).
   - **CONTACT_NOTIFICATION_EMAIL** = the email where you want notifications (e.g. `amansurana5454@gmail.com`).
4. Optionally set **RESEND_FROM** = `Lab2Market Contact <onboarding@resend.dev>` (default) or your verified domain.
5. **Redeploy** the service.

After redeploy, the status page should show `"emailMethod": "resend"` and contact form emails will be sent via Resend.

## 3. Alternative: Gmail SMTP (works locally; often blocked on Render)

- Set **EMAIL_USER** and **EMAIL_PASS** (Gmail App Password, not your normal password).
- Turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification) and create an [App Password](https://myaccount.google.com/apppasswords).
- On Render free tier, SMTP may still fail with `ENETUNREACH`; use Resend (above) instead.

## 4. Check server logs after submitting

After a test submit, check your backend logs. You should see either:

- `Contact form: sending via Resend to ...` then `email sent successfully via Resend`
- Or `Contact form: sending via SMTP to ...` then `email sent successfully via SMTP`
- Or an error line (e.g. Resend API error, or SMTP blocked).

## 5. Where notifications are sent

Emails are sent to **CONTACT_NOTIFICATION_EMAIL** if set, otherwise `amansurana5454@gmail.com`.
