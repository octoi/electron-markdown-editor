const { BrowserWindow, app } = require('electron');

process.env.NODE_ENV = 'production';

const isDev = process.env.NODE_ENV == 'production';

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: 'MarkdownEditor',
    width: 800,
    height: 600,
    resizable: true,
    center: true,
    roundedCorners: true,
    titleBarStyle: 'hidden',
    backgroundColor: '#141418',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.removeMenu();

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000'); // load react app
  }
}

app.on('ready', () => {
  createMainWindow();

  mainWindow.on('ready', () => mainWindow = null);
});

app.on('window-all-closed', () => {
  if (!process.platform == 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == 0) {
    createMainWindow();
  }
});