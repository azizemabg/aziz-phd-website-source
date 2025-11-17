# Automatic Deployment Setup Guide

This guide will help you set up automatic deployment so you can edit content directly in GitHub and have it automatically deploy to your live website.

## 🚀 Setup Process

### Step 1: Create Source Repository

1. **Go to GitHub.com** and create a new repository:
   - Name: `aziz-phd-website-source` (or any name you prefer)
   - Description: "Source code for Azize M. Abg personal website"
   - Make it **public**
   - **DO NOT** initialize with README

2. **Get the repository URL**: `https://github.com/azizemabg/aziz-phd-website-source.git`

### Step 2: Upload Source Code

**Upload ALL source files** (everything EXCEPT the `out/` folder):

```
📁 aziz-phd-website-source/
├── 📄 .github/workflows/deploy.yml     ← Automatic deployment workflow
├── 📄 .gitignore
├── 📄 components.json
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
├── 📁 public/
│   ├── 📄 logo.svg
│   ├── 📄 robots.txt
│   ├── 📄 profile.jpg      ← Your profile picture
│   └── 📄 background.jpg   ← Your background image
└── 📁 src/
    ├── 📁 app/             ← All your pages and layouts
    ├── 📁 components/      ← UI components
    ├── 📁 data/           ← Content management (edit here!)
    ├── 📁 hooks/          ← Custom React hooks
    └── 📁 lib/            ← Utilities
```

### Step 3: Enable GitHub Pages

1. **Go to your SOURCE repository** (`aziz-phd-website-source`)
2. **Go to Settings → Pages**
3. **Under "Source"**, select **GitHub Actions**
4. **Save the settings**

### Step 4: First Deployment

The GitHub Actions workflow will automatically:
- Build your website
- Deploy to GitHub Pages
- Your site will be available at: `https://azizemabg.github.io`

## 📝 How to Update Content

### Method 1: Edit Directly in GitHub (Easiest)

1. **Go to your source repository**: `https://github.com/azizemabg/aziz-phd-website-source`
2. **Navigate to** `src/data/content.ts`
3. **Click the pencil icon** to edit the file
4. **Make your changes**:
   ```ts
   // Example: Update a research project
   {
     id: 'climate-resilience-breeding',
     title: 'Updated Research Title',
     description: 'New description...',
     content: 'Updated detailed content...',
     // ... other fields
   }
   ```
5. **Scroll down** and click "Commit changes"
6. **GitHub Actions will automatically** build and deploy your changes

### Method 2: Add New Content

1. **Edit** `src/data/content.ts`
2. **Add a new item** to the `dynamicContent` array:
   ```ts
   {
     id: 'new-research-project',
     title: 'New Research Project',
     description: 'Project description',
     category: 'research',
     tags: ['Genomics', 'Breeding'],
     content: 'Detailed project information...',
     date: '2024',
     author: 'Azize M. Abg'
   }
   ```
3. **Commit changes** - automatic deployment will handle the rest

### Method 3: Local Development (Advanced)

1. **Clone your source repository**:
   ```bash
   git clone https://github.com/azizemabg/aziz-phd-website-source.git
   cd aziz-phd-website-source
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Make changes locally**

4. **Test locally**:
   ```bash
   npm run dev
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

## 🎯 Content Management Tips

### Editing Different Types of Content

**Research Projects**: Edit items with `category: 'research'`
**Education Programs**: Edit items with `category: 'education'`  
**Skills**: Edit items with `category: 'skills'`
**Publications**: Edit items with `category: 'publications'`

### Adding Images

1. **Upload images** to the `public/` folder in your source repository
2. **Reference them** in your content:
   ```ts
   {
     image: '/your-image.jpg'  // Path relative to public folder
   }
   ```

### Changing Profile & Background

1. **Replace** `public/profile.jpg` and `public/background.jpg`
2. **The changes will deploy automatically**

## 🔧 Troubleshooting

### Deployment Fails

1. **Check GitHub Actions** tab in your repository
2. **Look for error messages** in the build logs
3. **Common issues**:
   - Syntax errors in `content.ts`
   - Missing dependencies
   - Build timeout (increase if needed)

### Changes Not Appearing

1. **Wait 1-5 minutes** for deployment to complete
2. **Clear browser cache** or try incognito mode
3. **Check the deployment status** in GitHub Actions

### Need to Rollback

1. **Go to repository commits**
2. **Revert to a previous commit**
3. **Automatic deployment will rebuild**

## 📊 Monitoring

### Check Deployment Status

1. **Go to your repository**
2. **Click "Actions" tab**
3. **View the latest workflow run**
4. **Green checkmark** = Successfully deployed

### View Live Site

- **Main website**: `https://azizemabg.github.io`
- **Any content page**: `https://azizemabg.github.io/content/your-content-id`

## 🚀 Benefits of This Setup

- ✅ **Edit content directly in GitHub** - no local setup needed
- ✅ **Automatic deployment** - changes go live in minutes
- ✅ **Version control** - track all changes and rollback if needed
- ✅ **Professional workflow** - industry standard practice
- ✅ **Easy collaboration** - others can suggest edits via pull requests

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs for error messages
2. Ensure all required files are in the source repository
3. Verify the build completes successfully locally with `npm run build`

---

**Your website will now automatically update whenever you edit content in GitHub!** 🎉