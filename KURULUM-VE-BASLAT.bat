@echo off
chcp 65001 >nul
echo ========================================
echo ONUR HAVALANDIRMA - SITE KURULUMU
echo ========================================
echo.
echo Adim 1: Paketler yukleniyor...
echo Bu islem birkac dakika surebilir...
echo.

cd /d "%~dp0"
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo HATA: Paketler yuklenemedi!
    echo Node.js kurulu mu kontrol edin: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo Adim 2: Site baslatiliyor...
echo ========================================
echo.
echo Tarayicinizda http://localhost:3000 adresini acin
echo.
echo Siteyi kapatmak icin bu pencerede Ctrl+C tuslarina basin
echo.
echo ========================================
echo.

call npm run dev

pause


