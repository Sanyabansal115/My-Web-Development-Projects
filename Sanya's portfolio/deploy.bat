@echo off
REM =============================================================================
REM PORTFOLIO DEPLOYMENT SCRIPT (Windows)
REM Sanya Bansal - Professional Portfolio Website
REM =============================================================================

echo 🚀 Starting deployment process for Sanya Bansal Portfolio...
echo.

REM Check if Node.js is installed
echo [INFO] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js and try again.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [SUCCESS] Node.js version: %NODE_VERSION%

REM Check if npm is installed
echo [INFO] Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm and try again.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [SUCCESS] npm version: %NPM_VERSION%

REM Install dependencies
echo [INFO] Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies installed successfully

REM Run linting
echo [INFO] Running ESLint check...
npm run lint
if %errorlevel% neq 0 (
    echo [WARNING] Linting issues found, but continuing deployment
)

REM Build the project
echo [INFO] Building project for production...
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [SUCCESS] Build completed successfully

REM Check if dist directory exists
if not exist "dist" (
    echo [ERROR] Build directory 'dist' not found
    pause
    exit /b 1
)

echo [SUCCESS] Build directory created successfully
echo.

REM Display deployment options
echo 🌐 Deployment Options:
echo 1. Deploy to GitHub Pages
echo 2. Deploy to Vercel  
echo 3. Deploy to Netlify
echo 4. Generate deployment package
echo 5. Exit
echo.

set /p choice="Select deployment option (1-5): "

if "%choice%"=="1" (
    echo [INFO] Deploying to GitHub Pages...
    npm run deploy:gh-pages
    if %errorlevel% neq 0 (
        echo [ERROR] GitHub Pages deployment failed
        pause
        exit /b 1
    )
    echo [SUCCESS] Successfully deployed to GitHub Pages!
    echo 🌐 Your site will be available at: https://sanyabansal115.github.io/My-Web-Development
) else if "%choice%"=="2" (
    echo [INFO] Deploying to Vercel...
    vercel --prod
    if %errorlevel% neq 0 (
        echo [ERROR] Vercel deployment failed. Make sure Vercel CLI is installed.
        pause
        exit /b 1
    )
    echo [SUCCESS] Successfully deployed to Vercel!
) else if "%choice%"=="3" (
    echo [INFO] Deploying to Netlify...
    netlify deploy --prod --dir=dist
    if %errorlevel% neq 0 (
        echo [ERROR] Netlify deployment failed. Make sure Netlify CLI is installed.
        pause
        exit /b 1
    )
    echo [SUCCESS] Successfully deployed to Netlify!
) else if "%choice%"=="4" (
    echo [INFO] Creating deployment package...
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "TIMESTAMP=%dt:~0,4%%dt:~4,2%%dt:~6,2%_%dt:~8,2%%dt:~10,2%%dt:~12,2%"
    set "PACKAGE_NAME=sanya-portfolio-%TIMESTAMP%.zip"
    
    powershell -command "Compress-Archive -Path '.\dist\*' -DestinationPath '.\%PACKAGE_NAME%'"
    if exist "%PACKAGE_NAME%" (
        echo [SUCCESS] Deployment package created: %PACKAGE_NAME%
        for %%A in ("%PACKAGE_NAME%") do echo 📦 Package size: %%~zA bytes
    ) else (
        echo [ERROR] Failed to create deployment package
        pause
        exit /b 1
    )
) else if "%choice%"=="5" (
    echo [INFO] Deployment cancelled by user
    exit /b 0
) else (
    echo [ERROR] Invalid option selected
    pause
    exit /b 1
)

REM Create deployment log
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "LOGTIME=%dt:~0,4%%dt:~4,2%%dt:~6,2%_%dt:~8,2%%dt:~10,2%%dt:~12,2%"
set "LOG_FILE=deployment-%LOGTIME%.log"

echo =========================================== > "%LOG_FILE%"
echo SANYA BANSAL PORTFOLIO - DEPLOYMENT LOG >> "%LOG_FILE%"
echo =========================================== >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo Deployment Date: %date% %time% >> "%LOG_FILE%"
echo Node.js Version: %NODE_VERSION% >> "%LOG_FILE%"
echo npm Version: %NPM_VERSION% >> "%LOG_FILE%"
echo Build Status: SUCCESS >> "%LOG_FILE%"
echo Deployment Method: Option %choice% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo Build Statistics: >> "%LOG_FILE%"
dir /s /b dist\*.* | find /c "." >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"
echo =========================================== >> "%LOG_FILE%"

echo [SUCCESS] Deployment log created: %LOG_FILE%

REM Final success message
echo.
echo 🎉 DEPLOYMENT COMPLETED SUCCESSFULLY! 🎉
echo.
echo 📋 Next Steps:
echo    1. Verify the deployed site is working correctly
echo    2. Test all navigation and functionality  
echo    3. Check responsive design on different devices
echo    4. Monitor performance and user analytics
echo    5. Update README.md with the live site URL
echo.
echo 📊 Useful Commands:
echo    - npm run dev      (Start development server)
echo    - npm run build    (Build for production)
echo    - npm run preview  (Preview production build)
echo    - npm run lint     (Run code linting)
echo.
echo 🔗 Resources:
echo    - Repository: https://github.com/Sanyabansal115/My-Web-Development
echo    - Documentation: .\README.md
echo    - Deployment Guide: .\DEPLOYMENT.md
echo.
echo [SUCCESS] Thank you for using the Portfolio Deployment Script!

pause