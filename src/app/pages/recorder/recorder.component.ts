import { Component, OnInit } from '@angular/core';
import { IpcService } from "./../../services/ipc.service";
@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css']
})
export class RecorderComponent implements OnInit {

  constructor(private _ipc: IpcService) { }

  ngOnInit() {
  }
  isStepsOpen = false;
  openSteps(){
    if (this.isStepsOpen == false) {
      this._ipc.send('openSteps');
      this.isStepsOpen=true;
      console.log('open');
      
    } else {
      this._ipc.send('closeSteps');
      console.log('close');
      this.isStepsOpen=false;
    }
  }
}
