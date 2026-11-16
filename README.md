# BUGrock Launcher Website

[![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=flat-square&logo=github)](https://bugrocklauncher.github.io/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)

Static landing page for **[BUGrock Launcher](https://github.com/BUGrockLauncher/BUGrockLauncher)** — a modular Minecraft Bedrock Edition launcher for Windows 10 & 11 (x64), built with Vite and deployed to GitHub Pages.

---

## Development & Build

### Prerequisites
- Node.js 20+
- npm

### Commands

```bash
# Install dependencies
npm ci

# Start local development server
npm run dev

# Build static production output into /dist
npm run build

# Preview built site locally
npm run preview
```

---

## Project Structure

```text
bugrocklauncher.github.io/
├── .github/workflows/deploy.yml  # GitHub Pages build and deploy workflow
├── public/
│   ├── assets/                   # Logos, hero panorama background, icons
│   ├── fonts/                    # Minecraft pixel fonts
│   ├── robots.txt
│   └── sitemap.xml
├── index.html                    # Main landing page
├── package.json
├── vite.config.js
└── README.md
```

---

## License & Disclaimer

- **License**: Licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0).
- **Launcher Source**: [BUGrockLauncher on GitHub](https://github.com/BUGrockLauncher/BUGrockLauncher).
- **Disclaimer**: Not an official Minecraft product. Not approved by or associated with Mojang Studios or Microsoft.
