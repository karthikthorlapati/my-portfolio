# Personal Portfolio Website

A visually stunning, high-performance developer portfolio built for a Software Development Engineer (SDE) and Backend Architect. Featuring standard technical iconography, custom animations, parallax scrolling effects, and optimal web performance.

## Author
- **Name:** Karthik Thorlapati
- **Title:** SDE & Backend Architect / AI-ML Specialist
- **Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, Lucide React, Sharp

## Features
- **Component-Based Architecture:** Fully modularized codebase with reusable sections (`Hero`, `About`, `Skills`, `Projects`, `Education`, `Contact`) and custom utilities/hooks.
- **Modern Interactive Background:** Custom HTML5 Canvas particle system in the Hero section with dynamic, interactive node-linking.
- **Parallax Scrolling:** Smooth parallax background decorative elements powered by Framer Motion's `useScroll` and `useTransform` hooks.
- **Micro-Animations & Reveal Effects:** Framer Motion viewports reveal staggered grid layout animations and hover scale transformations.
- **Accessibility (A11y):** Full support for the global `@media (prefers-reduced-motion: reduce)` CSS rules to automatically disable transitions, animations, and particle effects for motion-sensitive users.
- **Performance Best Practices:** 
  - Layout-thrashing scroll listeners replaced with a highly optimized `IntersectionObserver` to track active section scroll sync.
  - Image assets compressed and served in the modern `.webp` format, dropping initial page weight by >50%.
  - Below-the-fold image assets optimized with `loading="lazy"` for lazy-loading.
  - Debounced resize event listeners inside the HTML5 Canvas particles to avoid processor spikes.

## Live Site
[Click here to view the live site](https://karthikthorlapati.vercel.app)

## Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/karthikthorlapati/my-portfolio.git
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```
3. Run the development server locally:
   ```bash
   npm run dev
   ```
4. Build the production bundle:
   ```bash
   npm run build
   ```