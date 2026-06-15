# Eleonora Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b2e5155-bcd9-4ae6-b185-4b0a199c88c7/deploy-status)](https://app.netlify.com/projects/eleonora-portfolio/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Personal developer portfolio for **Eleonora Nocentini Sköldebrink** — a freelance web and frontend developer. The site presents 15 client-style cases (company websites, web apps, API-heavy builds, and data projects), a verified internship reference, and a clear collaboration process.

**Live site:** [eleonora-portfolio.netlify.app](https://eleonora-portfolio.netlify.app/)

## Screenshots

### Home (Swedish)

![Portfolio homepage in Swedish](docs/screenshots/home.png)

### Home (English)

![Portfolio homepage in English](docs/screenshots/home-en.png)

### Case studies with category filters

![Projects section with filter pills and case cards](docs/screenshots/projects.png)

### Verified internship reference

![Reference section with internship certificate](docs/screenshots/reference.png)

## Features

- **15 reviewable cases** — each with problem/solution/result framing, tech stack, live demo, and repository links
- **Category filtering** — company sites, web apps, data projects, and internship work
- **Bilingual (SV/EN)** — client-side language toggle with persistent preference via `localStorage`
- **Verified reference** — internship certificate from Capace Media Group with downloadable PDF
- **Modern interactions** — scroll-triggered reveal animations (IntersectionObserver), scroll progress indicator, and reduced-motion support
- **SEO-ready** — metadata, Open Graph image generation, canonical URLs, and semantic markup

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, custom design tokens |
| Typography | Fraunces (display) + Inter (body) via `next/font` |
| Hosting | Netlify (continuous deployment from `main`) |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Lint
npm run lint

# Production build (static export to ./out)
npm run build
```

The site is exported as fully static HTML (`output: "export"`), so the `out/` directory can be hosted on any static host.

## Deployment

Deployed on [Netlify](https://eleonora-portfolio.netlify.app/) with continuous deployment: every push to `main` triggers a build (`npm run build`) and publishes the `out/` directory.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, and SEO metadata
    page.tsx            # Single-page portfolio (projects, process, reference, contact)
    globals.css         # Design tokens, animations, and global styles
    opengraph-image.tsx # Generated Open Graph image
docs/
  screenshots/          # README screenshots
public/
  references/           # Downloadable internship certificate (PDF)
```

## License

© Eleonora Nocentini Sköldebrink. All rights reserved.
