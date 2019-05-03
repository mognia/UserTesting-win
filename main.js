const { app, BrowserWindow, ipcMain ,ipcRenderer ,dialog } = require('electron')
var events = require('events');
var eventEmitter = new events.EventEmitter();
let win;
let Recorder;
let preview;
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
  
    width: 300, 
    height: 100,
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
    Recorder.setSize(300,192);
  //  Recorder.setResizable(false);
  });
  ipcMain.on('closeSteps',()=>{
    Recorder.setResizable(true);
    Recorder.setSize(300,100);
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

ipcMain.on('openRecDialog', (event)=>{
  const options  = {
    type: 'question',
    buttons: ["Yes","No"],
    message: "آیا از شروع ضبط اطمینان دارید؟"
   }

   let response = dialog.showMessageBox(options)
   
   if (response === 0) {
    event.sender.send('startRec');

   }
  
});

ipcMain.on('openPreview',(e ,options)=>{
  Recorder.setResizable(true);
  Recorder.setSize(429,356);
  Recorder.setResizable(false);
})
ipcMain.on('refreshPreview',(e ,options)=>{
  Recorder.setResizable(true);
  Recorder.setSize(362,100);
  Recorder.setResizable(false);
})

ipcMain.on('openRefreshDialog', (event)=>{
  const options  = {
    type: 'warning',
    buttons: ["Yes","No"],
    message: "آیا مطمئن هستید مراحل ضبط از اول انجام شود؟"
   }

   let response = dialog.showMessageBox(options)
   
   if (response === 0) {
    event.sender.send('refreshRec');

   }
  
});