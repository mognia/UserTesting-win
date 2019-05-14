import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IpcService } from './../../services/ipc.service';
import { RequestService } from '../../services/request-service.service';
@Component({
  selector: 'app-req-qualification',
  templateUrl: './req-qualification.component.html',
  styleUrls: ['./req-qualification.component.css']
})
export class ReqQualificationComponent implements OnInit {
  @Input() requestDetail;
  @Output() declinedQual = new EventEmitter<any>();
  @Output() acceptQual = new EventEmitter<any>();
  constructor(private  _ipc: IpcService) { }

  ngOnInit() {
  }
  openRecorder() {
    this._ipc.send('OpenRec');
  }

}
