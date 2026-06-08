# APENTAI Limited Website — Setup Guide

## Prerequisites

### 1. Install Node.js (v18 or higher)
- Go to https://nodejs.org
- Download the **LTS version** (e.g. v20.x)
- Run the installer and follow prompts
- Verify: open terminal and run:
  ```bash
  node -v   # should show v18+ or v20+
  npm -v    # should show 9+
  ```

### 2. Install VS Code
- Go to https://code.visualstudio.com
- Download and install

### 3. Install VS Code Extensions (required)
Open VS Code → press `Ctrl+Shift+X` → search and install each:

| Extension | Publisher |
|---|---|
| ESLint | Microsoft |
| Prettier - Code formatter | Prettier |
| Tailwind CSS IntelliSense | Bradlc |
| ES7+ React/Redux/React-Native snippets | dsznajder |
| Path Intellisense | Christian Kohler |
| Auto Rename Tag | Jun Han |
| GitLens | GitKraken |

### 4. Configure VS Code Settings
Press `Ctrl+Shift+P` → type `Open User Settings JSON` → paste:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## Project Setup (Step-by-Step)

### Step 1: Open Terminal in VS Code
Press `` Ctrl+` `` to open the integrated terminal.

### Step 2: Navigate to your desired folder
```bash
cd Desktop
# or wherever you want the project
```

### Step 3: Copy the project folder
Place the `apentai-website` folder you received into your desired location.

### Step 4: Open project in VS Code
```bash
code apentai-website
```

### Step 5: Install dependencies
```bash
npm install
```

### Step 6: Start development server
```bash
npm run dev
```

Your site will be live at: **http://localhost:5173**

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check for code errors |
| `npm run lint:fix` | Auto-fix code errors |
| `npm run format` | Format all files with Prettier |

---

## Deployment to Vercel (Free)

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option B: Via GitHub
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Click Deploy — done!

---

## Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

---

## Folder Structure Overview

```
apentai-website/
├── public/              # Static files (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── assets/          # Images and icons
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, ScrollToTop
│   │   ├── ui/          # Reusable UI primitives (Button, Card, etc.)
│   │   └── sections/    # Page sections (Hero, Services, FAQ, etc.)
│   ├── pages/           # Page components (Home, About, Contact, etc.)
│   ├── context/         # React Context (global state)
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Static data (services, testimonials, FAQs)
│   ├── utils/           # Helper functions
│   ├── constants/       # App-wide constants
│   ├── App.jsx          # Root component + router
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── .env.example         # Environment variable template
├── .eslintrc.cjs        # ESLint config
├── .prettierrc          # Prettier config
├── tailwind.config.js   # Tailwind design tokens
├── vite.config.js       # Vite bundler config
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```
