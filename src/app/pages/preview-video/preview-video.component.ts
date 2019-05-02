import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { ChunkHandelerService } from "../../services/chunk-handeler.service";
@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {
  videoSource;
  constructor(
    private _electronService: ElectronService,
    private ChunkService: ChunkHandelerService
  ) { 

  }

  ngOnInit() {
    this._electronService.ipcRenderer.on('recived-chunks', (e, options) => {
      this.playRec()
    });
  }
  playRec() {
   let chunks
    // console.log(typeof chunks);
    chunks =  this.ChunkService.sendChunk();
     console.log(chunks);

    // let video = document.querySelector('video')
    // video.controls = true;
    // video.muted = false
    // let blob = new Blob(chunks, { type: 'video/webm' })
    // console.log(blob);

    // let url = URL.createObjectURL(blob)
    // let a = document.createElement('a')
    // document.body.appendChild(a)
    // a.href = url
    // a.download = 'electron-screen-recorder.webm'
    // a.click()
    // setTimeout(function () {
    //   document.body.removeChild(a)
    //   window.URL.revokeObjectURL(url)
    // }, 100)
  }

}
