# 🚀 Deployment Guide - SmileCare Clinic Website

## Overview

Complete guide for deploying your dental clinic website to production.

---

## Table of Contents

1. [Building the Project](#building)
2. [Netlify Deployment](#netlify)
3. [Vercel Deployment](#vercel)
4. [Traditional Hosting](#traditional)
5. [Custom Domain Setup](#domain)
6. [Performance Optimization](#optimization)
7. [Monitoring & Analytics](#monitoring)

---

## Building the Project {#building}

### Step 1: Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Step 2: Preview Production Build (Optional)

```bash
npm run preview
```

Opens your production build locally for testing.

### Files Generated

- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS, JS, images
- Optimized bundle size (~500KB gzipped)

---

## Netlify Deployment {#netlify}

### Option 1: GitHub Integration (Recommended)

#### Prerequisites

- GitHub account with your code
- Netlify account (free)

#### Steps

1. Go to [https://netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Auto-Deployment

- Every push to main branch → Auto-deploys
- Pull requests → Deploy previews

### Option 2: Manual Deployment

#### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir dist
```

#### Using Drag & Drop

1. Build locally: `npm run build`
2. Drag `dist/` folder to netlify.app
3. Site is live instantly

### Netlify Configuration File

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Vercel Deployment {#vercel}

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
vercel
```

### Step 3: Follow Prompts

- Login to Vercel
- Link to GitHub project (optional)
- Build settings auto-configured

### Step 4: Production Deployment

```bash
vercel --prod
```

### Vercel Configuration File

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

---

## Traditional Hosting {#traditional}

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Upload Files

Upload `dist/` folder contents to your hosting server:

- Using FTP/SFTP
- Using cPanel File Manager
- Using hosting control panel

### Step 3: Configure Server

Set up redirects for SPA (Single Page Application):

#### For Apache (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### For Nginx

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  root /var/www/smilecare;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## Custom Domain Setup {#domain}

### Using Netlify

1. Go to Site settings
2. Click "Domain management"
3. "Add custom domain"
4. Follow DNS setup instructions

### Using Vercel

1. Go to Settings
2. Click "Domains"
3. "Add" new domain
4. Configure nameservers

### Manual DNS Configuration

Point your domain to hosting provider:

1. Purchase domain (GoDaddy, Namecheap, etc.)
2. Update nameservers to your hosting provider
3. Configure A/CNAME records

---

## Performance Optimization {#optimization}

### 1. Enable GZIP Compression

```bash
# Netlify & Vercel do this automatically
```

### 2. CDN Configuration

- Netlify: Edge cache enabled by default
- Vercel: Global CDN included
- Traditional: Consider Cloudflare (free)

### 3. Environment Variables

Create `.env.production`:

```
VITE_API_URL=https://api.yourdomain.com
VITE_WHATSAPP_NUMBER=+1234567890
```

### 4. Optimize Images (Optional)

Future improvement - add image optimization:

```bash
npm install image-minimizer-webpack-plugin
```

### 5. Enable Caching

```bash
# Netlify/Vercel handle this automatically
```

---

## SSL/HTTPS {#ssl}

### Automatic (Recommended)

- **Netlify**: Auto SSL via Let's Encrypt
- **Vercel**: Auto SSL included
- **Traditional**: Use Certbot with Let's Encrypt

### Manual SSL Setup

```bash
# Using Certbot (for traditional hosting)
sudo certbot certonly --webroot -w /var/www/yourdomain -d yourdomain.com
```

---

## Environment & Secrets {#env}

### For API Integration (Future)

Create `.env.local` (development):

```
VITE_API_URL=http://localhost:3000
VITE_WHATSAPP_NUMBER=+1234567890
```

Create `.env.production` (production):

```
VITE_API_URL=https://api.yourdomain.com
VITE_WHATSAPP_NUMBER=+1234567890
```

### Access in Components

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## Monitoring & Analytics {#monitoring}

### Google Analytics

Add to `src/main.jsx`:

```javascript
import { useEffect } from "react";

useEffect(() => {
  // Add Google Analytics code
}, []);
```

###Sentry Error Tracking

```bash
npm install @sentry/react
```

### Netlify Analytics

- Built-in (paid plans)
- Simple visitor tracking

### Vercel Analytics

- Real-time metrics
- Web Vitals monitoring

---

## Testing Before Deployment

### 1. Local Testing

```bash
npm run dev
# Test all pages and functionality
```

### 2. Production Build Test

```bash
npm run build
npm run preview
# Test optimized build locally
```

### 3. Checklist

- [ ] All links working
- [ ] Images loading
- [ ] Forms submitting
- [ ] Mobile responsive
- [ ] WhatsApp button functional
- [ ] No console errors

---

## Troubleshooting Deployment

### Blank Page After Deploy

**Solution**: Check `.htaccess` or nginx redirect rules

### 404 Errors on Routes

**Solution**: Add SPA redirect configuration

### Styles Not Loading

**Solution**: Check CSS file paths, clear cache

### Slow Performance

**Solution**:

- Enable gzip compression
- Use CDN
- Optimize images

### Domain Not Working

**Solution**:

- Wait 24-48 hours for DNS propagation
- Check nameserver settings
- Contact hosting provider

---

## Deployment Checklist

- [ ] Build completes without errors
- [ ] All content updated (clinic name, contact info)
- [ ] Links and navigation working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] Images optimized
- [ ] Favicons set
- [ ] Meta tags updated
- [ ] Analytics configured
- [ ] SSL working
- [ ] Domain configured
- [ ] Monitoring set up

---

## Post-Deployment

### 1. Test Live Site

- Test on mobile and desktop
- Test on different browsers
- Test all forms and buttons

### 2. Monitor Performance

- Check page load times
- Monitor server errors
- Track user analytics

### 3. Regular Updates

- Update content regularly
- Fix reported issues
- Monitor error logs

### 4. Backup

- Regular backups
- Version control on GitHub
- Database backups (future)

---

## Quick Deployment Commands

### Netlify

```bash
npm run build && netlify deploy --prod --dir dist
```

### Vercel

```bash
npm run build && vercel --prod
```

### Traditional (SCP)

```bash
npm run build && scp -r dist/* user@host:/var/www/yourdomain
```

---

## Need Help?

### Netlify Support

- https://netlify.com/support
- Chat support available

### Vercel Support

- https://vercel.com/support
- GitHub discussions

### Traditional Hosting

- Contact your hosting provider
- Check their documentation

---

## Success! 🎉

Your dental clinic website is now live!

**Next Steps:**

- Monitor analytics
- Update content regularly
- Gather patient feedback
- Plan future enhancements

---

**Built with React + Vite | Deployed with confidence 🚀**
