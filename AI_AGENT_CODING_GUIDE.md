# AI Agent Coding & Context Guide

Welcome! If you are learning **Claude Code**, **AI Agent Coding**, or working with AI coding assistants (like Antigravity, Claude Code, Cursor, Windsurf, or Codex), this guide explains the core concepts of context management, how AI agents read your codebase, and how to get the best results.

---

## 1. What is AI Agent Coding?

Unlike simple AI chatbots that just answer questions in a text box, an **AI Coding Agent** is an autonomous LLM-driven program capable of:
1. **Reading & Exploring Codebases**: Searching files, viewing directory trees, reading code logic.
2. **Planning Solutions**: Breaking down complex requests into multi-step implementation plans.
3. **Executing File Modifications**: Creating, replacing, or patching source code directly.
4. **Running Commands & Tests**: Executing `npm run build`, `git status`, or unit tests to verify empirical output.
5. **Self-Correction**: Reading error tracebacks, fixing broken logic, and retrying until success is verified.

---

## 2. The Power of "Context" in AI Coding

An LLM has no persistent memory between separate chats unless provided via **Context**.
**Context** consists of:
- **System Instructions**: Rules on how the AI agent should behave (formatting, coding standards, tool guidelines).
- **Workspace Context Files**: Files like `CLAUDE.md`, `PROJECT_CONTEXT.md`, `.cursorrules`, or `AGENTS.md`.
- **Conversation History**: Past prompts, responses, tool calls, and command outputs.
- **Active Code Files**: Files currently opened or read by tool calls during the session.

### The "Context Window" Limit
Every AI model has a maximum context window (e.g., 128k to 1M+ tokens).
- If context is **too small**, the AI lacks necessary info and guesses function names or file paths.
- If context is **cluttered with irrelevancies**, the AI suffers from "context dilution" and can miss details.
- **Best Practice**: Provide clean, structured context files (`PROJECT_CONTEXT.md` or `CLAUDE.md`) in your project root.

---

## 3. What are Context Files (`CLAUDE.md`, `PROJECT_CONTEXT.md`)?

When tools like **Claude Code** or AI Agents start inside a repository, the first thing they look for is a project configuration file (commonly named `CLAUDE.md`, `AGENTS.md`, or `PROJECT_CONTEXT.md`).

### Why do you need one?
Without a context file, the AI must guess:
- "How do I build this app? (`npm run dev`? `yarn start`? `pnpm build`?)"
- "What CSS or state management library are we using?"
- "Where are the API routes or components stored?"

With a context file, the agent immediately knows:
- **Build / Test commands**
- **Architecture overview**
- **Coding conventions & styling rules**
- **Known gotchas or design tokens**

---

## 4. Structure of a Great Context File

A typical `CLAUDE.md` or `PROJECT_CONTEXT.md` file should include:

```markdown
# Project Name & Overview

Brief description of what this project does.

## Key Commands
- **Install**: `npm install`
- **Dev Server**: `npm start`
- **Build**: `npm run build`
- **Test**: `npm test`

## Project Architecture
- `src/components/`: Reusable UI components
- `src/App.js`: Main layout and section router
- `public/`: Static assets (images, PDFs)

## Design System & Style Guidelines
- Primary Accent: Terracotta `#f26522` / Cyan `#38bdf8`
- Dark Theme: `#08090c` background
- Typography: `JetBrains Mono` for metadata, `Inter` for body
- Do not use Tailwind unless requested; use CSS variables in `index.css`.
```

---

## 5. How to Prompt AI Agents Effectively

To get high-quality code out of AI agents, follow these 4 golden rules:

### Rule 1: Be Specific & Provide Inspiration/Examples
Instead of: *"Make my website look better."*
Do: *"Redesign my website with a dark tech/HUD aesthetic inspired by jonathanmoore.com, using monospace section tags like § 01.a and reticle corner borders."*

### Rule 2: Ask for Planning Before Big Edits
For large tasks, tell the agent:
> *"Research the codebase first, write an implementation plan, and wait for my review before modifying any code."*

### Rule 3: Use Empirical Verification
Always require the agent to run build or test commands before declaring victory:
> *"Run `npm run build` to make sure there are no syntax or lint errors."*

### Rule 4: Keep Instructions Modular
If a task is huge (e.g. building a whole backend + frontend), break it into smaller sub-tasks:
1. First prompt: Create database models and migrations.
2. Second prompt: Create API endpoints.
3. Third prompt: Wire up the React UI.

---

## 6. Summary Checklist for Your AI Agent Workflows

| Step | Action | Why |
|---|---|---|
| 1 | Create `PROJECT_CONTEXT.md` | Gives AI persistent project knowledge |
| 2 | Use clear, structured prompts | Prevents ambiguity and bad assumptions |
| 3 | Let the AI inspect files first | Ensures AI uses actual existing code paths |
| 4 | Review implementation plans | Gives you full control over design decisions |
| 5 | Run automated builds/tests | Guarantees code works before shipping |

---
*Created for Raagul D — Cloud & DevOps Engineer & AI Enthusiast.*
