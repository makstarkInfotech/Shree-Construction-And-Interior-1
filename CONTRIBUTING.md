# Shree Construction & Interior - Development Workflow

## Project Structure for Team Collaboration

This project uses a Git workflow with separate branches for team members to work independently and merge their work safely.

### Branch Structure

- **main** - Production-ready code (stable releases)
- **develop** - Integration branch for all features
- **feature/dev1-*** - Developer 1's work area
- **feature/dev2-*** - Developer 2's work area
- **feature/dev3-*** - Developer 3's work area

### Team Setup

#### Developer 1: Frontend Components
- Branch: `feature/dev1-components`
- Responsible for: UI components, layouts, component logic
- Files: `src/components/*`

#### Developer 2: Pages & Integration
- Branch: `feature/dev2-pages`
- Responsible for: Page layouts, routing, component integration
- Files: `src/App.tsx`, main layout files

#### Developer 3: Styling & Backend Service
- Branch: `feature/dev3-styling`
- Responsible for: CSS/Tailwind, global styles, backend integration
- Files: `src/styles/*`, `src/index.css`, `backendService/*`

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Shree-Construction-And-Interior-1.git
   cd Shree-Construction-And-Interior-1
   ```

2. **Each developer: Create their feature branch from develop:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/devX-descriptive-name
   ```

3. **Install dependencies:**
   ```bash
   npm install
   npm run dev
   ```

### Development Workflow

#### For Each Developer:

1. **Create a branch for each feature:**
   ```bash
   git checkout -b feature/devX-feature-name
   ```

2. **Make your changes and commit regularly:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/devX-feature-name
   ```

3. **When ready, create a Pull Request (PR) to develop branch**
   - Go to GitHub and open a PR from your branch to `develop`
   - Request reviews from other team members
   - Address review feedback

4. **After approval, merge to develop:**
   - Use "Squash and merge" or "Create a merge commit" (team preference)
   - Delete your feature branch after merging

### Integration & Release

1. **When all features are complete**, create a PR from `develop` to `main`
2. **Tag the release:** `git tag -a v1.0.0 -m "Release version 1.0.0"`
3. **Push the tag:** `git push origin v1.0.0`

### Conflict Resolution

If merge conflicts occur:
1. Pull the latest develop branch
2. Merge develop into your feature branch
3. Resolve conflicts locally
4. Test thoroughly before pushing

```bash
git fetch origin
git merge origin/develop
# Resolve conflicts in editor
git add .
git commit -m "Merge develop and resolve conflicts"
git push origin feature/devX-name
```

### Commit Message Guidelines

- Use present tense: "Add feature" not "Added feature"
- Be specific: "Fix navbar styling on mobile" not "Fix bugs"
- Reference issues: "Fix #123: ..." when applicable
- Keep it concise but informative

### Code Review Checklist

Before approving a PR:
- [ ] Code follows project style guidelines
- [ ] Changes are tested locally
- [ ] No console errors/warnings
- [ ] Responsive design is maintained (if UI changes)
- [ ] No breaking changes to existing features
- [ ] Dependencies are documented (if added)

### Best Practices

- Pull `develop` regularly to stay updated
- Keep branches focused on single features
- Delete merged branches to keep repo clean
- Test before pushing
- Communicate with team about major changes
- Use meaningful branch and commit names

### Useful Commands

```bash
# View all branches
git branch -a

# Switch to a branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name

# View commit history
git log --oneline

# See what's different between branches
git diff main develop
```

For questions or issues, create a GitHub issue or discuss with the team!
