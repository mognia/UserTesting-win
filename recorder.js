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
    // let video = document.querySelector('video')
    // video.src = URL.createObjectURL(stream)

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
        playRec1()
      }, 10)
    // recording.stop()
}
recorder.prototype.getChunk = function getChunk() {
    return recordedChunks;
}
function playRec1(chunks) {
    // console.log(typeof chunks);
    
    // console.log(chunks);
    
    let video = document.querySelector('video')
  
    let blob = new Blob(recordedChunks, {type: 'video/webm'})
     
    video.src = window.URL.createObjectURL(blob)

}
recorder.prototype.playRec = function playRec(chunks) {
    // console.log(typeof chunks);
    
    // console.log(chunks);
    
    let video = document.querySelector('video')
    video.controls = true;
    video.muted = false
    let blob = new Blob(recordedChunks, {type: 'video/webm'})
     
    video.src = window.URL.createObjectURL(blob)

}
const cleanRecord = () => {
    let video = document.querySelector('video');
    video.controls = false;
    recordedChunks = []
    numRecordedChunks = 0
  }


var RecorderModule = new recorder();

export { RecorderModule };
