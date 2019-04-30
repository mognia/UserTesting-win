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
    cleanRecord()
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
    let video = document.querySelector('video')
    video.src = URL.createObjectURL(stream)

    localStream = stream
    try {
        console.log('Start recording the stream.')
        recording = new MediaRecorder(stream)
    } catch (e) {
        console.log(false, 'Exception while creating MediaRecorder: ' + e)
        return
    }
    recording.ondataavailable = (event) => {
        console.log(event);
        
        if (event.data && event.data.size > 0) {
          recordedChunks.push(event.data)
          numRecordedChunks += event.data.byteLength
        }
      }
    recording.onstop = () => { console.log('recorderOnStop fired') }
    recording.start()
    console.log('Recorder is started.')
    console.log(`state: ${state}`);
   // disableButtons()
}

recorder.prototype.stopRec = function stopRec() {
    console.log(localStream.getVideoTracks());
    recording.stop()
    localStream.getVideoTracks()[0].stop()
    console.log(localStream.getVideoTracks());
    
    // recording.stop()
}
recorder.prototype.playRec = function playRec() {
    let video = document.querySelector('video')
    video.controls = true;
    video.muted = false
    let blob = new Blob(recordedChunks, {type: 'video/webm'})
    video.src = URL.createObjectURL(blob)
}
const cleanRecord = () => {
    let video = document.querySelector('video');
    video.controls = false;
    recordedChunks = []
    numRecordedChunks = 0
  }

  const recorderOnDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      recordedChunks.push(event.data)
      numRecordedChunks += event.data.byteLength
    }
  }

var RecorderModule = new recorder();

export { RecorderModule };
