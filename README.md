# Adarsh Lal Anilal — Portfolio

Personal portfolio website for Adarsh Lal Anilal, Industrial Engineer.

Built with Next.js 16, TypeScript, and Tailwind CSS v4. Exports as a fully static site for GitHub Pages deployment.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build & Preview

```bash
npm run build
npx serve out
```

The static export is written to the `out/` directory.

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions. Push to `main` and the site deploys automatically.

**Setup (one-time):**
1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Set **Source** to **GitHub Actions**
4. Push a commit to `main` — the workflow handles the rest

## Updating Content

All text content lives in a single file: `src/data/portfolio.ts`. Edit that file to update projects, experience, skills, or any other section without touching components.

## Adding Your Resume

Replace `public/resume.pdf` with your actual resume PDF. The "Download Resume" button links to this file.

## Project Structure

```
src/
  app/           — Next.js App Router (layout, page, globals.css)
  components/    — React components for each section
  data/          — portfolio.ts (all content in one place)
public/
  favicon.svg    — AA initials favicon
  resume.pdf     — Resume PDF (placeholder)
.github/
  workflows/     — GitHub Pages auto-deploy
```
