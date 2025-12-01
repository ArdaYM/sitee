@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Site baslatiliyor...
echo Tarayicinizda http://localhost:3000 adresini acin
echo.
npm run dev
pause


