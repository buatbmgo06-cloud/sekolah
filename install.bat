@echo off
echo ========================================
echo   INSTALL DEPENDENCIES
echo   Website Sekolah SMA Nusantara Bangsa
echo ========================================
echo.

cd /d "%~dp0"

echo [1/2] Checking Node.js...
"C:\Program Files\nodejs\node.exe" --version
if errorlevel 1 (
    echo ERROR: Node.js tidak ditemukan!
    echo Silakan install dari https://nodejs.org
    pause
    exit /b 1
)

echo.
echo [2/2] Installing dependencies...
echo Ini akan memakan waktu 2-3 menit. Mohon tunggu...
echo.

"C:\Program Files\nodejs\npm.cmd" install

if errorlevel 1 (
    echo.
    echo ERROR: Instalasi gagal!
    echo Coba jalankan ulang script ini.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   INSTALASI SELESAI!
echo ========================================
echo.
echo Untuk menjalankan website, double-click: start.bat
echo.
pause
