const {app, BrowserWindow, ipcMain, Notification} = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width : 1000,
    height : 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavascript: true,
      preload: path.join(__dirname, 'preload.js')
    },
    
  })

  win.loadFile('index.html')
  isDev && win.webContents.openDevTools()
}

if(isDev){
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady().then(createWindow)
  
ipcMain.on('notify', (event, message) => {
  new Notification({title: 'Notifi', body: message}).show()
})
ipcMain.on('app-quit', () => {
  app.quit()
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
})

app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow();
  }
})