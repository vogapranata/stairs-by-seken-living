$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$repo = "https://github.com/vogapranata/stairs-by-seken-living.git"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git belum terpasang. Install Git for Windows terlebih dahulu." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path ".git")) {
  git init
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

git checkout -B main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git config user.name "vogapranata"
git config user.email "vogapranata@users.noreply.github.com"

git add .
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Tidak memakai `git rev-parse HEAD` karena branch baru belum punya commit.
$changes = git status --porcelain
if ($changes) {
  git commit -m "STAIRS website demo"
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} else {
  Write-Host "Tidak ada perubahan baru untuk di-commit." -ForegroundColor Yellow
}

$remotes = @(git remote)
if ($remotes -contains "origin") {
  git remote set-url origin $repo
} else {
  git remote add origin $repo
}
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "" 
Write-Host "Mengupload ke $repo ..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host "" 
  Write-Host "Upload belum berhasil. Jika GitHub meminta login, selesaikan login lalu jalankan file ini lagi." -ForegroundColor Red
  exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Selesai! Repository berhasil diupload:" -ForegroundColor Green
Write-Host $repo -ForegroundColor Green
