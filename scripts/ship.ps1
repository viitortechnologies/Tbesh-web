param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string]$Message
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

git add -A
$status = git status --porcelain
if (-not $status) {
  Write-Host "Nothing to commit."
  exit 0
}

git commit -m $Message
git push -u origin HEAD
