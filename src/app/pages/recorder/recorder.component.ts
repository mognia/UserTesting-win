import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { RecorderModule } from '../../../../recorder.js';
import { IpcService } from './../../services/ipc.service';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})

export class RecorderComponent implements OnInit {
  recording = false;
  recorded = false;
  showVideo = false;

  constructor(private _ipc: IpcService,
    private _electronService: ElectronService,

  ) {


  }
  isStepsOpen = false;
  ngOnInit() {


  }

  openSteps() {
    if (this.isStepsOpen === false) {
      this._ipc.send('openSteps');
      this.isStepsOpen = true;

    } else {
      this._ipc.send('closeSteps');
      this.isStepsOpen = false;
    }
  }
  Rec() {
    this._ipc.send('openRecDialog');
    this._ipc.on('startRec', (event, result) => {
      this.recording = true;
      this._electronService.desktopCapturer.getSources({ types: ['screen'] }, (error, sources) => {
        if (error) {
          throw error;
        }
        if (sources.length > 1) {
          // TODO: add multiple window option
        } if (sources.length === 1) {

          RecorderModule.onAccessApproved(sources[0].id);
        }
      });
    });


  }
  stopRec() {
    this.showVideo = true;
    this.recorded = true;
    RecorderModule.stopRec();
    
    this._ipc.send('openPreview');
  }
  playRec() {
    let chunks = RecorderModule.getChunk();
    let video = document.querySelector('video')
    let blob = new Blob(chunks, {type: 'video/webm'})
    video.src = window.URL.createObjectURL(blob);
  }
}
