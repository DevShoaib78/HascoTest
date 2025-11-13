@echo off
echo Starting continuous build and push process...
echo.

:loop
echo [%date% %time%] Building project...
call npm run build

if %errorlevel% equ 0 (
    echo Build successful! Committing and pushing changes...
    
    git add .
    git commit -m "Auto-commit: Build successful - %date% %time%"
    git push origin main
    
    if %errorlevel% equ 0 (
        echo Push successful!
    ) else (
        echo Push failed!
    )
) else (
    echo Build failed! Skipping commit and push.
)

echo.
echo Waiting 30 seconds before next build...
timeout /t 30 /nobreak > nul
echo.
goto loop
