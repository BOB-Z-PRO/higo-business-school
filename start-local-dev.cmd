@echo off
cd /d "%~dp0"
if not exist tmp-ui-audit mkdir tmp-ui-audit
echo [%date% %time%] starting HIGO local dev > tmp-ui-audit\local-dev.log
"D:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next dev -p 3000 >> tmp-ui-audit\local-dev.log 2>&1
echo [%date% %time%] dev server exited with code %errorlevel% >> tmp-ui-audit\local-dev.log
pause
