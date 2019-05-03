var events = require('events');
var eventEmitter = new events.EventEmitter();
function recorder() { }

let localStream
let microAudioStream
let recordedChunks = []
let numRecordedChunks = 0
let recording
let includeMic = true;

recorder.prototype.onAccessApproved = function onAccessApproved(id) {
   // cleanRecord()
    if (!id) {
        console.log('Access rejected.')
        return
    }
    console.log('Window ID: ', id)
    navigator.webkitGetUserMedia({
        audio: {
            mandatory: {
              chromeMediaSource: 'desktop', chromeMediaSourceId: id
            }
          },
        video: {
            mandatory: {
                chromeMediaSource: 'desktop', chromeMediaSourceId: id,
                maxWidth: window.screen.width, maxHeight: window.screen.height
            }
        }
    }, getMediaStream, getUserMediaError)
}
const getUserMediaError = () => {
    console.log('getUserMedia() failed.')
  }
const getMediaStream = (stream) => {
    
    localStream = stream
    try {
        console.log('Start recording the stream.')
        recording = new MediaRecorder(stream);
      
    } catch (e) {
        console.log(false, 'Exception while creating MediaRecorder: ' + e)
        return
    }
    recording.ondataavailable = (event) => {
  
        
        if (event.data && event.data.size > 0) {
            
          recordedChunks.push(event.data)
          numRecordedChunks += event.data.byteLength
        }
      }
    recording.onstop = () => { 

     }
    recording.start()

}

recorder.prototype.stopRec = function stopRec() {
    
    recording.stop()
    localStream.getVideoTracks()[0].stop();
    setTimeout(function () {
        playRec()
      }, 10)
}

function playRec(chunks) {
    
    let video = document.querySelector('video')
  
    let blob = new Blob(recordedChunks, {type: 'video/webm'})
     
    video.src = window.URL.createObjectURL(blob)

}

recorder.prototype.refresh = function refresh() {
cleanRecord();
}

recorder.prototype.saveFile = function saveFile() {
    let blob = new Blob(recordedChunks, {type: 'video/webm'})
    let url = URL.createObjectURL(blob)
    let a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = url
    a.download = 'testHub-recorded.webm'
    a.click()
    setTimeout(function () {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 100)

    }
const cleanRecord = () => {
    let video = document.querySelector('video');
    video.controls = false;
    recordedChunks = []
    numRecordedChunks = 0
  }


var RecorderModule = new recorder();

export { RecorderModule };
