@echo off
echo Starting Thryve Backend Server...
echo.
echo Press Ctrl+C to stop the server
echo.

cd /d "C:\code\Thryve\thryve-backend"

:start
echo [%time%] Starting server...
node src/server.js

echo.
echo [%time%] Server stopped. 
echo Press any key to restart, or Ctrl+C to exit
pause >nul
goto start