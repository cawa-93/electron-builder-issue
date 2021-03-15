# electron-builder-issue

### Description
Electron can't find module if this module imported from npm workspaces. I guess the reason is that there is no `package-lock.json` file in the packed application.


### Steps to reproduce
1. Clone repo 
2. Install electron and electron-builder: ``` npm ci```
3. Try run in Node:
    ```
    node /path/to/electron-builder-issue/packages/main/dist/index.cjs
    ```
    **Expected output:**
    ```
    /path/to/electron-builder-issue/packages/renderer/dist/index.html
    ```
4. Build Electron app: `npm run build`
5. Try run in Electron:
    ```
    /path/to/electron-builder-issue/dist/win-unpacked/vite-electron-builder.exe
    ```
    **Expected output:**
    ```
    /path/to/electron-builder-issue/dist/win-unpacked/resources/app/packages/renderer/dist/index.html
    ```
    **Actual behaver**:
    Electron throw Error: `Can not find module "@packages/renderer"`
6. Try to fix
    1. Go to `cd /path/to/electron-builder-issue/dist/win-unpacked/resources/app`
    2. `npm install`
    3. Repeat Step 5.
