# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment Setup

Your site is now configured for automatic deployment on GitHub Pages!

### Live Site URL
Your site will be available at:
**https://makstarkInfotech.github.io/Shree-Construction-And-Interior-1/**

### How It Works

1. **Automatic Builds**: When you push code to the `main` branch, GitHub Actions automatically:
   - Installs dependencies
   - Builds the project with Vite
   - Deploys to GitHub Pages

2. **Build Output**: The `build/` folder is deployed to the `gh-pages` branch

3. **Base Path**: The site is configured with `base: '/Shree-Construction-And-Interior-1/'` to work properly on GitHub Pages

### Deployment Workflow

#### For the Team:

1. **Work on your feature branch:**
   ```bash
   git checkout feature/devX-name
   npm run dev
   # Make your changes
   git add .
   git commit -m "Your commit message"
   git push origin feature/devX-name
   ```

2. **Create a Pull Request:**
   - Go to GitHub and open a PR to `develop` branch
   - Request reviews from team members
   - Address feedback

3. **Merge to develop:**
   - Once approved, merge the PR
   - Updates are reflected in the `develop` branch

4. **Prepare for release:**
   - When features are complete, create a PR from `develop` to `main`
   - Once merged to `main`, GitHub Actions automatically deploys!

### Manual Deployment (if needed)

```bash
npm run build
npm run deploy
```

This command:
1. Builds your project
2. Creates a commit with the build folder
3. Pushes the `build/` folder to the `gh-pages` branch

### Checking Deployment Status

1. Go to your repository on GitHub
2. Click **"Actions"** tab
3. You'll see the deployment workflow running
4. Wait for it to complete (usually 1-2 minutes)
5. Check your site at: https://makstarkInfotech.github.io/Shree-Construction-And-Interior-1/

### Troubleshooting

**Site is blank or shows 404:**
- Wait a few minutes for GitHub Pages to refresh
- Clear browser cache (Ctrl+Shift+Delete)
- Check that the `gh-pages` branch exists in your repo

**Build fails:**
- Check the GitHub Actions logs for errors
- Ensure all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first

**Assets not loading:**
- The `base` path is already set correctly in `vite.config.ts`
- Clear your browser cache
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)

### Important Notes

- **Only the `main` branch triggers automatic deployment** (for production stability)
- The `develop` branch is for team integration
- All team members should merge their feature branches to `develop` first
- Project maintainer merges `develop` to `main` for releases
- The `gh-pages` branch is auto-generated and managed by GitHub Actions

### Quick Commands Reference

```bash
# Build locally
npm run build

# Deploy manually
npm run deploy

# Check git status
git status

# View all branches
git branch -a

# Switch branches
git checkout branch-name

# View recent commits
git log --oneline -5
```

For more information, visit:
- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
