# GitHub Pages Deployment Guide

This guide will help you deploy your Azize M. Abg website to GitHub Pages at `azizemabg.github.io`.

## Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js 20+ installed

## Step-by-Step Deployment Instructions

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository exactly: `azizemabg.github.io`
4. Make sure it's **public**
5. Do NOT initialize with README (we'll push existing code)
6. Click "Create repository"

### 2. Initialize Git and Push Code

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Make initial commit
git commit -m "Initial commit: Azize M. Abg website"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/azizemabg/azizemabg.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/azizemabg/azizemabg.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will automatically start

### 4. Monitor Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow named "Deploy to GitHub Pages" running
3. Wait for it to complete (green checkmark)
4. Your site will be available at: `https://azizemabg.github.io`

## Configuration Details

### What We've Configured

1. **Next.js Static Export**: The site is built as static HTML files
2. **GitHub Actions Workflow**: Automated deployment on every push to main
3. **Base Path Configuration**: Properly configured for GitHub Pages subdirectory
4. **No Jekyll**: `.nojekyll` file prevents GitHub from using Jekyll processing
5. **Image Optimization**: Images are configured for static export

### File Structure After Build

When built, the site generates:
- `out/` directory containing all static files
- HTML files for each page
- Optimized CSS and JavaScript
- Static assets

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository Settings → Pages → Custom domain
3. Add your domain (e.g., `azize-abg.com`)
4. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `azizemabg.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Troubleshooting

### Common Issues

1. **Build Fails in GitHub Actions**
   - Check the Actions tab for error details
   - Ensure all dependencies are in package.json
   - Verify there are no dynamic server-side features

2. **404 Errors on Pages**
   - Make sure all pages are properly linked
   - Check that `trailingSlash: true` is set in next.config.ts
   - Verify base path configuration

3. **Images Not Loading**
   - Ensure images are in the public folder
   - Check that `images.unoptimized: true` is set

4. **Styling Issues**
   - Clear browser cache
   - Check that CSS files are properly generated

### Manual Deployment (If Needed)

If the automated workflow fails, you can deploy manually:

```bash
# Build the site
npm run build:gh-pages

# The built files will be in the 'out' directory
# You can manually upload these to GitHub Pages
```

## Updating Content

To update your website:

1. Make changes to your local files
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy

## Contact Information

For technical support or questions about this deployment setup, please refer to the GitHub Actions logs or check the Next.js documentation for static exports.

---

**Your website will be live at:** https://azizemabg.github.io