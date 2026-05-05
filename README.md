# Basic Portfolio Site

Minimal static site for GitHub Pages.

Included files:

- index.html
- styles.css
- script.js
- .github/workflows/pages.yml

Publish steps:

1. Create a GitHub repository and add it as `origin`.
2. Push to the `main` branch:

```bash
git init
git add .
git commit -m "Add basic site"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

3. The included GitHub Actions workflow will deploy the repository root to GitHub Pages on push to `main`. After the push, wait a few minutes and check the Pages settings or visit:

```
https://<your-username>.github.io/<repo-name>/
```

If you prefer manual setup, enable GitHub Pages in the repository Settings and choose the `gh-pages` or `main` branch as desired.

NPM & Deploy
------------

Install dependencies and deploy via `gh-pages`:

```bash
npm install
# (first-time) install dev deps: gh-pages and http-server
npm run deploy
```

Local preview:

```bash
npm run start
# then open http://localhost:8080
```

Notes:
- `npm run deploy` publishes the repository root to the `gh-pages` branch using the `gh-pages` package.
- Ensure your Git remote (`origin`) is set and you pushed at least one commit before running `npm run deploy`.

