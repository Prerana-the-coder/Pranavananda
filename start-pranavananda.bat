@echo off
REM Starter for pranavananda - uses npm install only if needed
cd /d "%~dp0\pranavananda"
if not exist node_modules (
  echo node_modules not found — installing dependencies...
  npm install || (echo npm install failed & pause & exit /b 1)
) else (
  echo node_modules found — skipping install
)
echo Starting Next.js dev server...
npm run dev
