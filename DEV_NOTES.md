# Dev notes — pranavananda

- Use the batch script `start-pranavananda.bat` to start the dev server on Windows. It will run `npm install` only if `node_modules` is missing, then run `npm run dev`.
- If PowerShell execution policy prevents running `.ps1`, use the `.bat` file instead.
- From a terminal you can run:

```powershell
cd C:\Users\hello\Desktop\PRANAVANANDA
start-pranavananda.bat
```

Stopping the server: press `Ctrl+C` in the dev terminal.
