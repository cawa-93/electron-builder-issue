const {_electron: electron} = require('playwright');
const path = require('node:path');

const pkg = require('./package.json');

console.log(`Running test suite for:\n\tElectron: ${pkg.devDependencies.electron}\n\telectron-builder: ${pkg.devDependencies["electron-builder"]}`)

/**
 * Expected: App successfully launch and close
 * Actual: App crash on launch
 * @see ./packages/main/dist/index.cjs
 */
;(async () => {
    const electronApp = await electron.launch({
        executablePath: path.resolve(__dirname, 'dist/win-unpacked/vite-electron-builder.exe')
    });

    await electronApp.close()
})()