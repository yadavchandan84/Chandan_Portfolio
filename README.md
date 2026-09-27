# Chandan · Developer Portfolio

A modern, responsive developer portfolio with an interactive 3D hero, dark/light mode, and smooth scroll animations. Built with **React + Vite + Tailwind CSS**, **Three.js** (react-three-fiber), and **Framer Motion**.

![Tech](https://img.shields.io/badge/React-18-149eca) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

- 🎨 Interactive 3D hero scene (Three.js) with a graceful CSS fallback when WebGL is unavailable
- 🌗 Dark / light mode toggle (remembers your choice + respects system preference)
- ✨ Scroll-reveal animations, animated navbar with scroll-spy, scroll progress bar
- 🃏 3D tilt project cards that react to your cursor
- 📱 Fully responsive, mobile-first layout
- ♿ Respects `prefers-reduced-motion`
- ⚡ Code-split 3D bundle for a fast first paint

## Sections

Hero · About · Experience (timeline) · Projects · Skills · Achievements · Contact

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Editing your content

All text lives in one file: **`src/data/portfolio.js`**.
Update your bio, experience, projects, skills, achievements, and links there — no component edits required.

### Add your resume

Drop your resume PDF into the `public/` folder named **`Chandan_Resume.pdf`** (the Hero "Resume" button links to `/Chandan_Resume.pdf`). To use a different name, update `profile.resumeUrl` in `src/data/portfolio.js`.

### Add project links / live demos

In `src/data/portfolio.js`, each project has `github` and `demo` fields. Replace the placeholder GitHub URLs with your actual repo links, and add a `demo` URL to show a live-demo button.

## Deployment

### Vercel
1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build: `npm run build`, Output: `dist`. `vercel.json` is already included.

### Netlify
1. Push this repo to GitHub.
2. New site from Git at [app.netlify.com](https://app.netlify.com).
3. Build command `npm run build`, publish directory `dist`. `netlify.toml` is already included.

### GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Build: `npm run build`.
3. Deploy the `dist/` folder to the `gh-pages` branch (e.g. with the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package or GitHub Actions).

## Tech stack

React 18 · Vite 5 · Tailwind CSS 3 · Three.js / @react-three/fiber / @react-three/drei · Framer Motion

---

Built by Chandan. Feel free to fork and make it your own.
