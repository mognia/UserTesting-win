const { app, BrowserWindow, ipcMain ,ipcRenderer ,desktopCapturer } = require('electron')
var events = require('events');
var eventEmitter = new events.EventEmitter();

app.on('ready',()=>{
    console.log('ready');
    
})
eventEmitter.on('testemit',()=>{
    console.log('testemt');
    
})

ipcMain.on('startRecording', () => {
    console.log('ssssssssss');
    
    
    // desktopCapturer.getSources({ types: ['screen'] }).then(async sources => {
    //     console.log(sources);
  
    //     for (const source of sources) {
    //       if (source.name === 'Electron') {
    //         try {
    //           const stream = await navigator.mediaDevices.getUserMedia({
    //             audio: false,
    //             video: {
    //               mandatory: {
    //                 chromeMediaSource: 'desktop',
    //                 chromeMediaSourceId: source.id,
    //                 minWidth: 1280,
    //                 maxWidth: 1280,
    //                 minHeight: 720,
    //                 maxHeight: 720
    //               }
    //             }
    //           })
    //           handleStream(stream)
    //         } catch (e) {
    //           handleError(e)
    //         }
    //         return
    //       }
    //     }
    // })
  });
  