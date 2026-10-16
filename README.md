# Akshay P. — Personal Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. It is designed for free static hosting on GitHub Pages.

## Preview locally

Open `index.html` directly in a browser, or use VS Code's Live Server extension if installed. No Node.js build step is required.

## Personal details to check before publishing

Edit `assets/site-config.js`:

```js
window.PORTFOLIO_CONFIG = {
  email: "",
  linkedin: "",
  resume: ""
};
```

- `email`: your professional email address, e.g. `name@example.com`.
- `linkedin`: full LinkedIn profile URL.
- `resume`: a relative path such as `assets/resume.pdf` (only after adding your resume PDF). Leave any value blank to hide the corresponding button.

Review every project description and remove or adjust anything that you cannot personally explain. The SentinelRAG entry states that offline retrieval was verified and that a live LLM provider call has not yet been verified.

## Free hosting via GitHub Pages

Recommended repository name for GitHub username `Akshii31`:

`Akshii31.github.io`

1. Create a **public** repository with the exact name `Akshii31.github.io` on GitHub. Do not initialise it with a README, licence or `.gitignore`.
2. From this folder, run `git push -u origin main`. The `origin` remote is already set to `https://github.com/Akshii31/Akshii31.github.io.git`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for deployment and open `https://akshii31.github.io/`.

GitHub Pages is static hosting: it serves this portfolio website, not the Python/FastAPI or Streamlit application. The SentinelRAG project link points to its source repository. Do not place API keys or `.env` files in the website repository.

## Files

- `index.html` — site content and structure.
- `assets/styles.css` — responsive visual design.
- `assets/main.js` — mobile navigation and optional links.
- `assets/site-config.js` — optional contact, LinkedIn and resume settings.
