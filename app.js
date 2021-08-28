import { BrowserWindow, app } from 'electron';

process.env.NODE_ENV = 'production';

const isDev = process.env.NODE_ENV == 'production';

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: 'MarkdownEditor',
    width: 800,
    height: 600,
    resizable: true,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

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