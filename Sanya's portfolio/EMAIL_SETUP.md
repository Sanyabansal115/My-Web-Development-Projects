# Contact Form Email Setup Instructions

Your contact form is now configured to send emails to `sanya.bansal.115@gmail.com` using multiple methods:

## Method 1: EmailJS (Recommended)
EmailJS allows direct email sending from the frontend without a backend server.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Connect Your Gmail Account**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail"
   - Follow the authentication steps

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template content:
   ```
   Subject: Portfolio Contact: {{from_name}}
   
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   
   Reply to: {{from_email}}
   ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services" tab
   - Template ID: Found in "Email Templates" tab  
   - Public Key: Found in "Account" > "General" tab

5. **Update Environment Variables**
   - Open `.env` file in your project root
   - Replace the placeholder values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

6. **Restart Development Server**
   ```bash
   npm run dev
   ```

## Method 2: Mailto Fallback (Already Working)
If EmailJS is not configured or fails, the form automatically falls back to opening the user's email client with a pre-filled message.

## Current Status
✅ **Contact form is functional** - Uses mailto fallback
✅ **Email integration ready** - Just needs EmailJS setup
✅ **Responsive design** - Works on all devices
✅ **Form validation** - Required fields enforced
✅ **Loading states** - User feedback during submission

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. If EmailJS is configured: Email sent directly
4. If not configured: Email client opens with pre-filled message

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Email services integration

Perfect for a portfolio website!