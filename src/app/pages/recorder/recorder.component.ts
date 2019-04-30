import { Component, OnInit } from '@angular/core';
import { IpcService } from "./../../services/ipc.service";
import { ElectronService } from 'ngx-electron';
import { Navigator } from "./navigator";
@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})

export class RecorderComponent implements OnInit {
  
  constructor(private _ipc: IpcService,
    private _electronService: ElectronService,
    public navigator: Navigator) {


  }
  ngOnInit() {

  }
  isStepsOpen = false;
   localStream
   microAudioStream
   recordedChunks = []
   numRecordedChunks = 0
   recorder
   includeMic = false
  openSteps() {
    if (this.isStepsOpen == false) {
      this._ipc.send('openSteps');
      this.isStepsOpen = true;
      console.log('open');

    } else {
      this._ipc.send('closeSteps');
      console.log('close');
      this.isStepsOpen = false;
    }
  }
  Rec() {
    console.log('rec');

    this._electronService.desktopCapturer.getSources({ types: ['screen'] }, (error, sources) => {
      if (error) throw error;
      if (sources.length > 1) {
        //TODO: add multiple window option
      } if (sources.length == 1) {
        // this.onAccessApproved(sources[0].id)
        console.log(sources[0].id);
        this.onAccessApproved(sources[0].id);
      }
    })
  }
  async onAccessApproved(id) {
    if (!id) {
      console.log('Access rejected.')
      return
    }
    const stream = await this.navigator.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop', chromeMediaSourceId: id,
          maxWidth: window.screen.width, maxHeight: window.screen.height
        }
      }
    },
      this.getMediaStream,
)
  }
  getMediaStream(stream) {
    let video = document.querySelector('video')
    video.src = URL.createObjectURL(stream)
    this.localStream = stream
    stream.onended = () => { console.log('Media stream ended.') }

    let videoTracks = this.localStream.getVideoTracks()
    let audioTracks = this.microAudioStream.getAudioTracks()
    this.localStream.addTrack(audioTracks[0])

    try {
      console.log('Start recording the stream.')
      this.recorder = new MediaRecorder(stream)
    } catch (e) {
      console.assert(false, 'Exception while creating MediaRecorder: ' + e)
      return
    }
    this.recorder.ondataavailable = recorderOnDataAvailable
    this.recorder.onstop = () => { console.log('recorderOnStop fired') }
    this.recorder.start()
    console.log('Recorder is started.')
   // disableButtons()
  }

}
