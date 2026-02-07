$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location "$scriptDir\pranavananda"
if (-Not (Test-Path -Path "node_modules")) {
  Write-Host "node_modules not found — installing dependencies..."
  npm install
} else {
  Write-Host "node_modules found — skipping install"
}
Write-Host "Starting Next.js dev server..."
npm run dev
