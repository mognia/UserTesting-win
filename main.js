const { app, BrowserWindow, ipcMain ,ipcRenderer ,desktopCapturer } = require('electron')
var events = require('events');
var eventEmitter = new events.EventEmitter();
let win;
let Recorder;
const remote = require('electron').remote;


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 498, 
    height: 770,
    parent:Recorder,
   backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/UserTesting-win/index.html`)

  win.setMenu(null)

  win.setResizable(false);
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null;
  });

}

function createRecorder () {
  // Create the browser window.
  Recorder = new BrowserWindow({
  
    width: 414, 
    height: 250,
    // frame: false,
    backgroundColor: '#fff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
  
  Recorder.loadURL(`file://${__dirname}/dist/UserTesting-win/index.html#rec`)
  
  Recorder.setMenu(null);

  Recorder.setResizable(false);
  
  //// uncomment below to open the DevTools.
   Recorder.webContents.openDevTools()
  // Event when the window is closed.
  Recorder.on('closed', function () {
    Recorder = null;
    win = null
  });

  ipcMain.on('openSteps',()=>{
    Recorder.setResizable(true);
    Recorder.setSize(314,200);
  //  Recorder.setResizable(false);
  });
  ipcMain.on('closeSteps',()=>{
    Recorder.setResizable(true);
    Recorder.setSize(314,90);
  //  Recorder.setResizable(false);
  });
}


// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('OpenRec', (event) => {
  createRecorder();
  win.hide();
});
