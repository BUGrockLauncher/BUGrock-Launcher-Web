# 🌐 BUGrock Launcher Official Website

[![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=flat-square&logo=github)](https://7amoz.github.io/BUGrock-Launcher/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)

The official high-performance landing page and documentation portal for **[BUGrock Launcher](https://github.com/7AmoZ/BUGrock-Launcher)** — the modern Minecraft: Bedrock Edition custom launcher for Windows 10 & 11.

---

## ⚡ Highlights & Architecture

- **Ultra-Lightweight & Fast**: Sub-30kB total gzip bundle size for instant page loads (100/100 Lighthouse Performance).
- **SEO & GEO Optimized**:
  - Full OpenGraph & Twitter Cards meta suite.
  - Schema.org Structured Data (`SoftwareApplication`, `FAQPage`, `WebSite`) for Google rich snippets and Generative Engine Optimization (GEO) for ChatGPT, Copilot, and Perplexity.
  - Automatically served `sitemap.xml` and `robots.txt`.
- **Smooth 60fps Micro-Animations**:
  - CSS hardware-accelerated transitions & glassmorphism.
  - Zero-overhead `IntersectionObserver` scroll reveals.
  - Interactive System Checklist & dynamic copy buttons.
  - Accordion FAQ with full accessibility (`aria-expanded`).
- **Automated CI/CD**: One-click GitHub Pages deployment via GitHub Actions.

---

## 🚀 Development & Build

### Prerequisites
- Node.js 18+ (tested on Node v20/v22)
- npm or pnpm

### Getting Started

```bash
# 1. Clone repository
git clone https://github.com/7AmoZ/BUGrock-Launcher-Web.git
cd BUGrock-Launcher-Web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Production Build

```bash
# Compile optimized static bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
BUGrock-Launcher-Web/
├── .github/workflows/deploy.yml  # Automated GitHub Pages CI/CD workflow
├── public/                       # Static public assets
│   ├── assets/                   # Launcher logos, hero mockups, icons
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # XML Sitemap for SEO indexation
├── src/
│   ├── style.css                 # Tailwind v4 styles, glassmorphism, animations
│   └── main.js                   # Lightweight UI logic (checklists, FAQ, reveal)
├── index.html                    # Semantic HTML5 entry with Schema.org JSON-LD
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 License & Attribution

- **Website Code**: Licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0).
- **Launcher Project**: [BUGrock Launcher on GitHub](https://github.com/7AmoZ/BUGrock-Launcher) by **7AmoZ**.
- **Disclaimer**: Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
