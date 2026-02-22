# Elevate Educate Website

React + Vite project for the Educational Tech Company website design.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Radix UI + MUI component libraries

## 1. Required Tools (Install Before Building)

Install these tools first on any new system.

### Core tools

- `git` (for cloning)
- `node` (Node.js `22+` recommended; `24.x` works)
- `npm` (comes with Node.js)

### Optional but recommended

- VS Code (or another editor)
- Supabase CLI and Docker Desktop (only if you will run/deploy Supabase edge functions)

### Install commands by OS

Use one option based on your OS:

#### macOS (Homebrew)

```bash
brew install git node@24
echo 'export PATH="/opt/homebrew/opt/node@24/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y git curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

#### Windows

Install using `winget` in PowerShell:

```powershell
winget install Git.Git
winget install OpenJS.NodeJS.LTS
```

## 2. System Settings Checklist (Before Build)

Run these checks from a new terminal:

```bash
git --version
node -v
npm -v
```

Expected:

- `node` is `v22+`
- `npm` is available

If `node` or `npm` says "command not found", fix your `PATH` and reopen terminal.

## 3. Clone and Install

```bash
git clone <your-repo-url>
cd Elevate-Educate
npm ci
```

Notes:

- Use `npm ci` for reproducible installs from `package-lock.json`.
- If `npm ci` fails due lock mismatch, use `npm install`.

## 4. Run in Development

```bash
npm run dev
```

Default Vite local URL:

- `http://localhost:5173/`

## 5. Create Production Build

```bash
npm run build
```

Build output is generated in:

- `dist/`

Optional local preview of production build:

```bash
npx vite preview --host
```

## 6. Environment Variables

For the current frontend app, no local `.env` file is required to run `dev` or `build`.

## 7. Supabase Functions (Optional)

This repo includes Supabase function files under `supabase/functions/server/`.
Only required if you plan to run or deploy backend functions.

Required env vars for those functions:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Typical prerequisites:

- Supabase CLI
- Docker Desktop (for local Supabase stack)

## 8. Troubleshooting

### `node`/`npm` not found

- Ensure Node is installed.
- Ensure Node install path is on `PATH`.
- Open a new terminal and re-run:

```bash
node -v && npm -v
```

### Wrong Node version

- Switch to Node `22+` (or `24.x`) and reinstall dependencies:

```bash
rm -rf node_modules
npm ci
```

### Port already in use (`5173`)

Run Vite on a different port:

```bash
npm run dev -- --port 5174
```
