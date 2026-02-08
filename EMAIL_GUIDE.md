# Email Implementation Guide

## Overview

This document explains how to implement email functionality for the lab2market platform. While not yet implemented, this guide provides a complete roadmap for adding email notifications and contact form integration.

---

## Email Features Breakdown

### 1. Contact Form Email
**Status**: Form created (frontend), endpoint ready
**What it does**: Sends user messages from the Contact page

### 2. Welcome Email
**Status**: Not implemented
**What it does**: Sends confirmation when user signs up

### 3. Problem Notifications
**Status**: Not implemented
**What it does**: Notifies researchers when new problems match their interests

### 4. Project Notifications
**Status**: Not implemented
**What it does**: Notifies investors when new projects are posted

### 5. Message Notifications
**Status**: Not implemented
**What it does**: Notifies users when they receive chat messages

---

## Email Service Options

### Option A: Gmail SMTP (Free, Simple)
**Cost**: Free
**Pros**: 
- No signup required if you have Gmail
- Simple configuration
- Reliable for development/small volume

**Cons**: 
- Limited to 100 emails/day
- Requires Gmail password or App Password
- May be marked as spam

**Setup**:
```env
# .env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Generate from Gmail Security settings
```

### Option B: SendGrid (Recommended, Free tier available)
**Cost**: Free tier (100 emails/day), then $25-150/month
**Pros**:
- Professional email service
- Good deliverability
- Free tier is generous
- Great API documentation
- Built-in templates

**Cons**:
- Requires account signup
- Paid plans for higher volume

**Setup**:
```env
# .env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@lab2market.com
```

### Option C: Mailgun
**Cost**: Free tier (100 emails/month), then $35/month
**Pros**:
- Flexible routing
- Good webhook support for notifications

**Cons**:
- Lower free tier limit
- More complex setup

### Option D: AWS SES
**Cost**: $0.10 per 1,000 emails sent
**Pros**:
- Very cheap at scale
- Integrates with AWS ecosystem

**Cons**:
- Requires AWS account
- More complex setup
- Starts in sandbox mode

---

## Implementation Roadmap

### Phase 1: Contact Form Email (Easiest)
**Time**: 2-3 hours
**Files to modify**:
- `backend/src/routes/contactRoutes.js` (new)
- `backend/src/controllers/contactController.js` (new)
- `backend/src/utils/emailService.js` (new)
- `backend/src/app.js` (add route)

**Steps**:
1. Install nodemailer: `npm install nodemailer`
2. Create email service utility
3. Create contact form endpoint
4. Connect Contact.jsx form to backend API
5. Send confirmation email to user
6. Send notification email to admin

**Code Example**:
```javascript
// backend/src/utils/emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(name, email, subject, message) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Re: ${subject}`,
    html: `<p>Thank you for contacting us!</p>
           <p>We received your message and will respond within 24 hours.</p>`,
  });

  // Also send to admin
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form: ${subject}`,
    html: `<p>From: ${name} (${email})</p>
           <p>${message}</p>`,
  });
}
```

### Phase 2: Authentication Emails (Medium)
**Time**: 2-4 hours
**Includes**:
- Welcome email on signup
- Password reset email
- Email verification

### Phase 3: Notification Emails (Complex)
**Time**: 4-6 hours
**Includes**:
- Problem posted notifications
- Project posted notifications
- Interest expressed notifications
- Message received notifications

### Phase 4: Email Templates & Queuing (Advanced)
**Time**: 4-8 hours
**Includes**:
- Handlebars/EJS email templates
- Email job queue (Bull or Bee-Queue)
- Retry logic
- Unsubscribe handling

---

## SendGrid Integration (Recommended)

### 1. Sign Up
```
1. Go to https://sendgrid.com/
2. Create free account
3. Verify sender email
4. Create API key in Settings → API Keys
```

### 2. Install Package
```bash
npm install @sendgrid/mail
```

### 3. Create Email Service
```javascript
// backend/src/utils/emailService.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(to, subject, htmlContent) {
  try {
    await sgMail.send({
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}
```

### 4. Environment Variables
```env
# .env
SENDGRID_API_KEY=SG_xxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@lab2market.com
ADMIN_EMAIL=admin@lab2market.com
```

### 5. Contact Form Endpoint
```javascript
// backend/src/routes/contactRoutes.js
import express from 'express';
import { sendEmail } from '../utils/emailService.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send to user
    await sendEmail(
      email,
      `Thank you for contacting lab2market`,
      `<p>Hi ${name},</p>
       <p>We received your message: "${subject}"</p>
       <p>We'll respond within 24 hours.</p>`
    );

    // Send to admin
    await sendEmail(
      process.env.ADMIN_EMAIL,
      `New contact: ${subject}`,
      `<p>From: ${name} (${email})</p>
       <p>${message}</p>`
    );

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
```

### 6. Update Frontend Form
```javascript
// frontend/src/pages/Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post('/contact', formData);
    setShowToast({ message: 'Message sent successfully!', type: 'success' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setShowToast({ message: 'Failed to send message', type: 'error' });
  }
};
```

---

## Cost Analysis

### Scenario 1: Small Project (100 users)
- 10 emails/user/month = 1,000 emails/month
- **Best option**: Gmail (free)
- **Cost**: $0

### Scenario 2: Growing Project (1,000 users)
- 5 emails/user/month = 5,000 emails/month
- **Best option**: SendGrid free tier or Mailgun ($35/month)
- **Cost**: $0-35/month

### Scenario 3: Large Project (10,000 users)
- 5 emails/user/month = 50,000 emails/month
- **Best option**: SendGrid Pro ($35-100/month) or AWS SES ($5-10/month)
- **Cost**: $5-100/month

---

## Email Templates

### Welcome Email Template
```html
<h2>Welcome to lab2market!</h2>
<p>Hi {{firstName}},</p>
<p>Welcome to the platform connecting industry challenges with academic expertise.</p>
<p><a href="{{siteUrl}}/dashboard">Get started →</a></p>
<p>Questions? Reply to this email or visit our <a href="{{siteUrl}}/contact">Contact page</a>.</p>
```

### Problem Posted Notification
```html
<h2>New Problem Posted</h2>
<p>A new problem matching your interests has been posted:</p>
<h3>{{problemTitle}}</h3>
<p>{{problemDescription}}</p>
<p>Sector: {{sector}}</p>
<p><a href="{{siteUrl}}/problems/{{problemId}}">View details →</a></p>
```

### Interest Expressed Notification
```html
<h2>Interest Expressed</h2>
<p>{{userName}} from {{company}} is interested in your project:</p>
<h3>{{projectTitle}}</h3>
<p><a href="{{siteUrl}}/dashboard">View in Dashboard →</a></p>
```

---

## Testing Emails

### Local Testing (Mailtrap)
```javascript
// Use Mailtrap for testing without sending real emails
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});
```

### Email Preview Service
- [Nodemailer](https://nodemailer.com/about/): Has preview mode
- [Mailtrap](https://mailtrap.io/): Free email testing
- [Litmus](https://www.litmus.com/): Professional testing

---

## Production Deployment

### Render Environment Variables
1. Go to Render Dashboard
2. Select lab2market backend service
3. Click "Environment" 
4. Add:
   ```
   SENDGRID_API_KEY=SG_xxxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=noreply@lab2market.com
   ADMIN_EMAIL=your-admin-email@gmail.com
   ```
5. Click "Save" and service will redeploy

### Verify Deployment
```bash
curl -X POST https://api.lab2market.com/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "subject": "Test",
    "message": "Testing email service"
  }'
```

---

## Troubleshooting

### Email not sending?
1. Check API key is correct
2. Verify sender email is verified (for SendGrid/Gmail)
3. Check error logs: `node src/server.js`
4. Ensure environment variables are set

### Emails going to spam?
1. Setup SPF/DKIM records
2. Use reputable email service (SendGrid, Mailgun)
3. Add unsubscribe link to emails
4. Keep complaint rate below 0.5%

### Rate limiting issues?
- Gmail: 100/day
- SendGrid free: 100/day  
- SendGrid Pro: Unlimited
- Solution: Implement email queue with Bull

---

## Next Steps When Ready

1. Choose email service (SendGrid recommended)
2. Create `backend/src/utils/emailService.js`
3. Create `backend/src/routes/contactRoutes.js`
4. Update `Contact.jsx` form to call backend
5. Add environment variables to Render
6. Test with Mailtrap first
7. Switch to production service
8. Monitor deliverability

---

## Resources

- [Nodemailer Docs](https://nodemailer.com/)
- [SendGrid Docs](https://docs.sendgrid.com/)
- [Email Best Practices](https://www.mailgun.com/blog/email-best-practices/)
- [SMTP Security](https://www.ssl.com/article/smtp-security/)
