Write-Host "Starting continuous build and push process..." -ForegroundColor Green
Write-Host ""

while ($true) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$timestamp] Building project..." -ForegroundColor Yellow
    
    # Run build
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Build successful! Committing and pushing changes..." -ForegroundColor Green
        
        # Add all changes
        git add .
        
        # Commit with timestamp
        git commit -m "Auto-commit: Build successful - $timestamp"
        
        # Push to origin
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Push successful!" -ForegroundColor Green
        } else {
            Write-Host "Push failed!" -ForegroundColor Red
        }
    } else {
        Write-Host "Build failed! Skipping commit and push." -ForegroundColor Red
    }
    
    Write-Host ""
    Write-Host "Waiting 30 seconds before next build..." -ForegroundColor Cyan
    Start-Sleep -Seconds 30
    Write-Host ""
}
