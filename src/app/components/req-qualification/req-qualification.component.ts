import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
@Component({
  selector: 'app-req-qualification',
  templateUrl: './req-qualification.component.html',
  styleUrls: ['./req-qualification.component.css']
})
export class ReqQualificationComponent implements OnInit {
  @Output() declinedQual = new EventEmitter<any>();
  @Output() acceptQual = new EventEmitter<any>();
  constructor(private  _ipc: IpcService) { }

  ngOnInit() {
  }
  openRecorder() {
    this._ipc.send('OpenRec');
  }

}
