$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

Write-Host "Using Node $(node -v)"

Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }

Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue |
  Where-Object { $_.CommandLine -match "next dev" } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

Start-Sleep -Seconds 1

if (Test-Path .next) {
  Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

if (Test-Path node_modules\.cache) {
  Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Starting Tbesh at http://127.0.0.1:3000"
Write-Host "Hard-refresh if styles look wrong: Ctrl+Shift+R"
Write-Host ""

npx next dev -H 127.0.0.1 -p 3000
