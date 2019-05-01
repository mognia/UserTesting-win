import { Component, OnInit } from '@angular/core';
import { RecorderModule } from '../../../../recorder.js';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {

  constructor(
    private _electronService: ElectronService,

  ) { }

  ngOnInit() {
   this._electronService.ipcRenderer.on('recived-chunks', (e , options)=>{
    console.log("from previewwww  "+options);
    
   })
   
  }

}
