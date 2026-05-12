@echo off
echo ========================================
echo   MENJALANKAN WEBSITE SEKOLAH
echo   SMA Nusantara Bangsa
echo ========================================
echo.

cd /d "%~dp0"

echo Checking dependencies...
if not exist "node_modules" (
    echo.
    echo ERROR: Dependencies belum terinstall!
    echo Silakan jalankan install.bat terlebih dahulu.
    echo.
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo.
echo ========================================
echo   Website akan berjalan di:
echo   http://localhost:3000
echo ========================================
echo.
echo Tekan Ctrl+C untuk menghentikan server
echo.

"C:\Program Files\nodejs\npm.cmd" run dev

pause
