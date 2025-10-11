# Deployment Guide - Sanya Bansal Portfolio

This guide provides step-by-step instructions for deploying the portfolio website to various cloud hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ Node.js (v16 or higher) installed
- ✅ Git installed and configured
- ✅ GitHub account with repository access
- ✅ Project built successfully (`npm run build`)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides seamless deployment with automatic builds from GitHub.

#### Steps:
1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   npm run deploy:vercel
   ```

4. **Configure project settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Automatic Deployment:
- Connect GitHub repository to Vercel dashboard
- Enable automatic deployments on push to main branch
- Configure environment variables if needed

---

### Option 2: Netlify

Netlify offers excellent static site hosting with continuous deployment.

#### Steps:
1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**
   ```bash
   npm run deploy:netlify
   ```

4. **Manual deployment via drag-and-drop**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Drag the `dist` folder to deploy area
   - Configure custom domain if needed

#### Continuous Deployment:
- Connect GitHub repository in Netlify dashboard
- Set build command: `npm run build`
- Set publish directory: `dist`
- Enable automatic deploys on git push

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:
1. **Install gh-pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (already configured)
   ```json
   {
     "homepage": "https://sanyabansal115.github.io/My-Web-Development",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy:gh-pages
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

#### Custom Domain Setup:
- Add CNAME file to public folder with your domain
- Configure DNS records with your domain provider
- Enable HTTPS in GitHub Pages settings

---

### Option 4: Railway

Modern hosting platform with excellent developer experience.

#### Steps:
1. **Connect GitHub repository**
   - Go to [Railway Dashboard](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure build settings**
   - Build Command: `npm run build`
   - Start Command: Not needed (static site)
   - Public Path: `dist`

3. **Environment Variables**
   - Set `NODE_VERSION` to `18` if needed
   - Add any other required environment variables

---

## 🔧 Build Configuration

### Vite Configuration
The `vite.config.js` is configured for optimal production builds:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // For relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable for production
    minify: 'terser'
  }
})
```

### Performance Optimizations
- ✅ Code splitting enabled
- ✅ Asset optimization
- ✅ CSS minification
- ✅ Image optimization
- ✅ Gzip compression (platform dependent)

---

## 📊 Monitoring and Analytics

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

### Analytics Setup
- Google Analytics 4
- Hotjar for user behavior
- Search Console for SEO

---

## 🔒 Security Best Practices

### Content Security Policy
Add CSP headers for security:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### HTTPS Configuration
- Enable HTTPS on all platforms
- Set up HSTS headers
- Configure SSL certificates

---

## 🌐 Custom Domain Setup

### DNS Configuration
1. **A Records** (for apex domain)
   - Point to hosting provider's IP addresses

2. **CNAME Records** (for subdomains)
   - Point to hosting provider's domain

3. **Example DNS Setup for Vercel:**
   ```
   Type  Name  Value
   A     @     76.76.19.61
   CNAME www   cname.vercel-dns.com
   ```

### Domain Verification
- Add domain to hosting platform
- Verify ownership via DNS or file upload
- Configure SSL certificate
- Set up redirects (www to non-www or vice versa)

---

## 📈 SEO Optimization

### Meta Tags
Ensure proper meta tags in `index.html`:
```html
<meta name="description" content="Sanya Bansal - Software Engineering & AI Portfolio">
<meta name="keywords" content="software engineer, AI, machine learning, React developer">
<meta property="og:title" content="Sanya Bansal - Portfolio">
<meta property="og:description" content="Professional portfolio showcasing software engineering and AI expertise">
```

### Sitemap Generation
- Generate sitemap.xml for search engines
- Submit to Google Search Console
- Monitor search performance

---

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version compatibility
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Verify all dependencies are properly installed

#### Routing Issues
- For SPAs, configure server redirects to index.html
- Add `_redirects` file for Netlify: `/* /index.html 200`
- Configure catch-all routes for proper navigation

#### Performance Issues
- Optimize images and assets
- Enable gzip compression
- Use CDN for static assets
- Implement lazy loading for components

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 📝 Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Test the build locally with `npm run preview`
- [ ] Check all links and navigation work
- [ ] Verify all images load correctly
- [ ] Test responsive design on different devices
- [ ] Run Lighthouse audit (score 90+ recommended)
- [ ] Check console for any errors
- [ ] Verify contact form functionality
- [ ] Test PDF downloads (transcript, certificates)
- [ ] Update README with live site URL
- [ ] Create git tag for release version

---

**Deployment completed successfully! 🎉**

Your portfolio is now live and accessible to potential employers and clients worldwide.