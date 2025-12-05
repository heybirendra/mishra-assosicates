# EmailJS Setup Instructions for Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (jeetendramishra756@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from KK Mishra & Associates website contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "abcdefghijklmnop")

## Step 5: Update Website Files

### Update contact.html:
Replace `YOUR_PUBLIC_KEY` on line 149 with your actual public key:
```javascript
emailjs.init("abcdefghijklmnop"); // Your actual public key
```

### Update contact-validation.js:
Replace on line 118:
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```
With your actual Service ID and Template ID.

## Step 6: Test the Form
1. Open contact.html in your browser
2. Fill out the form with test data
3. Click "Send Message"
4. Check if email arrives at jeetendramishra756@gmail.com and birendra.stpl@gmail.com

## Troubleshooting
- If emails don't send, check browser console for errors
- Verify all IDs are correct
- Make sure you're not exceeding the 200 emails/month limit
- Check spam folder for test emails

## Alternative: Formspree (Simpler Setup)
If EmailJS is too complex, you can use Formspree:
1. Go to https://formspree.io/
2. Sign up and create a form
3. Get your form endpoint URL
4. Update contact.html form action to: `action="https://formspree.io/f/YOUR_FORM_ID"`
5. Change method to: `method="POST"`

This is simpler but less customizable.
