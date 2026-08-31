# Raagul D — Resume & Portfolio Website Context

This document serves as the project context for AI coding tools (Claude Code, Antigravity, AGY, Cursor).

## Overview
A React 18 single-page resume and portfolio website for **Raagul D** (Cloud & DevOps Engineer). 

- **Aesthetic**: Inspired by [jonathanmoore.com](https://jonathanmoore.com/?ref=onepagelove) — High-tech design engineering HUD, monospace section indexes, reticle card borders, fine dot-matrix patterns, subtle grain overlay, dark HSL color scheme.
- **Tech Stack**: React 18, Plain CSS variables (`index.css` & `App.css`), Lucide icons (`lucide-react`).

## Key Commands
- `npm start`: Runs the development server locally on `http://localhost:3000`.
- `npm run build`: Compiles production bundle into `build/`.
- `npm run deploy`: Deploys build directory to GitHub Pages via `gh-pages`.

## Project Structure
```
c:\Users\Admin\Documents\learnings\resume\
├── public/
│   ├── influx-architecure.jpg
│   ├── infra-architecture.drawio.png
│   ├── raagul-img.jpeg
│   └── resume.pdf
├── src/
│   ├── components/       # UI Components (HeaderChrome, SectionLabel, RoleCard, ArchModal, ProfileModal)
│   ├── App.js            # Main page assembly & section scroll observers
│   ├── App.css           # Layouts, component styles, HUD reticles
│   └── index.css         # CSS Variables, Design Tokens, Fonts, Noise & Grid Overlays
├── AI_AGENT_CODING_GUIDE.md # Guide to AI Coding Agents & Context Management
└── PROJECT_CONTEXT.md       # Repository context reference
```

## Design System Tokens
- **Background**: `#08090c` (Ultra-dark slate)
- **Surface**: `#0f1117` (Reticle container)
- **Accent Primary**: `#f26522` (Terracotta / Warm Amber)
- **Accent Cyan**: `#38bdf8` (Status active cyan)
- **Typography**:
  - Headings & Metadata: `'JetBrains Mono'`, `'Space Mono'`, monospace
  - Body & Descriptions: `'Inter'`, system-ui, sans-serif
