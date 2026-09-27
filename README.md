<div align="center">

# 🚀 Chandan · Developer Portfolio

### A modern, 3D-interactive portfolio for a Full Stack Developer with an AI/GenAI focus

*Built with React, Vite, Tailwind CSS, Three.js & Framer Motion*

<br/>

[![React](https://img.shields.io/badge/React-18-149eca?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r169-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff4d8d?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br/>

[**🌐 Live Demo**](#-deployment) · [**✨ Features**](#-features) · [**🛠 Tech Stack**](#-tech-stack) · [**⚡ Quick Start**](#-quick-start) · [**🚢 Deploy**](#-deployment)

</div>

---

## 📖 Overview

A polished, fully responsive developer portfolio featuring an interactive **3D hero scene**, **dark / light mode**, and buttery **scroll animations**. Every piece of content is driven from a single data file, so updating it is effortless — no digging through components.

> **Chandan** — Full Stack Developer & Software Engineer (AI / GenAI focus)
> B.Tech @ Delhi Technological University (DTU) · React · Node · FastAPI · RAG systems

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🎨 | **Interactive 3D hero** | A Three.js "AI core" — distorted sphere, orbiting rings, floating tech knots & a starfield you can drag to rotate |
| 🛡️ | **Graceful fallback** | Automatically swaps to an animated CSS orb when WebGL is unavailable, so the site never breaks |
| 🌗 | **Dark / light mode** | Remembers your choice and respects the system preference |
| 🃏 | **3D tilt project cards** | Cards tilt in 3D toward your cursor with depth and glow |
| ✨ | **Scroll animations** | Reveal-on-scroll sections, animated navbar with scroll-spy, top progress bar |
| 📱 | **Fully responsive** | Mobile-first layout that looks great on every screen |
| ♿ | **Accessible** | Semantic markup, keyboard-friendly, honors `prefers-reduced-motion` |
| ⚡ | **Optimized** | 3D bundle is code-split & lazy-loaded for a fast first paint |

---

## 🗂 Sections

`Hero` → `About` → `Experience` (timeline) → `Projects` → `Skills` → `Achievements` → `Contact`

### Featured projects showcased

- **Blogify** — Full-stack blogging platform · JWT auth + Google OAuth (Firebase), RBAC, Cloudinary media
- **LexScope-GraphRAG** — End-to-end GraphRAG for legal/tax docs · FastAPI, Qdrant, Neo4j, Gemini, hybrid retrieval
- **Netflix Clone** — Responsive streaming UI with dynamic content rows

---

## 🛠 Tech Stack

**Framework & Build**
- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)

**Styling**
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom teal/emerald theme

**3D & Animation**
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)

**Fonts**
- Inter + JetBrains Mono (Google Fonts)

---

## ⚡ Quick Start

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm

```bash
# 1. Clone the repo
git clone https://github.com/yadavchandan84/Chandan_Portfolio.git
cd Chandan_Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 🎨 Customization

All content lives in **one file** — [`src/data/portfolio.js`](src/data/portfolio.js). Update your bio, experience, projects, skills, achievements, and links there. No component edits needed.

**Change the accent color:** edit the `accent` palette in [`tailwind.config.js`](tailwind.config.js) — it updates the entire site.

**Add your resume:** drop your PDF into `public/` named `Chandan_Resume.pdf` (or change `profile.resumeUrl` in the data file).

**Add project links:** each project in the data file has `github` and `demo` fields — fill in real repo/demo URLs.

---

## 📁 Project Structure

```
Chandan_Portfolio/
├── public/                 # Static assets (favicon, resume PDF)
├── src/
│   ├── components/
│   │   ├── three/          # 3D hero scene + WebGL fallback
│   │   ├── ui/             # Icons, Reveal animations, section header
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx # 3D tilt card
│   │   └── BackToTop.jsx
│   ├── sections/           # Hero, About, Experience, Projects, Skills, Achievements, Contact
│   ├── hooks/
│   │   └── useTheme.js      # Dark/light mode logic
│   ├── data/
│   │   └── portfolio.js     # ⭐ Single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── vercel.json             # Vercel deploy config
├── netlify.toml            # Netlify deploy config
└── .github/workflows/      # GitHub Pages deploy workflow
```

---

## 🚢 Deployment

The project ships ready-to-deploy on all three major static hosts.

### ▲ Vercel (recommended)

1. Push this repo to GitHub (already done ✅)
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite → click **Deploy**
4. Live at `https://chandan-portfolio.vercel.app`

`vercel.json` is already included.

### 🟢 Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
2. Pick this repo → **Deploy**

Build command `npm run build` and publish dir `dist` are preconfigured in `netlify.toml`.

### 🐙 GitHub Pages

1. In `vite.config.js`, set `base: '/Chandan_Portfolio/'`
2. Push to `main` — the included [workflow](.github/workflows/deploy-pages.yml) builds & deploys automatically
3. Enable **Settings → Pages → Source: GitHub Actions**

> All three auto-redeploy on every `git push`.

---

## 📬 Connect

<div align="center">

[![Email](https://img.shields.io/badge/Email-yadavchandan6103@gmail.com-2dd4bf?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yadavchandan6103@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Chandan_Yadav-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chandan-yadav-89aaa3253/)
[![GitHub](https://img.shields.io/badge/GitHub-yadavchandan84-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yadavchandan84)
[![LeetCode](https://img.shields.io/badge/LeetCode-Chandan__8448-ffa116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/Chandan_8448/)

</div>

---

<div align="center">

**Built with ☕ and React by Chandan**

⭐ Star this repo if you like it!

</div>
