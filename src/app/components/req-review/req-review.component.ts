import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../../services/request-service.service';
import { IpcService } from './../../services/ipc.service';
@Component({
  selector: 'app-req-review',
  templateUrl: './req-review.component.html',
  styleUrls: ['./req-review.component.css']
})
export class ReqReviewComponent implements OnInit {
  requestDetail;
  constructor(
    private reqService: RequestService,
    private  _ipc: IpcService
  ) { }
  @Output() declinedReq = new EventEmitter<any>();
  @Output() openQualification = new EventEmitter<any>();

  ngOnInit() {
    this.reqService.selectedDetail.subscribe(data => {
      this.requestDetail = data.requestDetail;
    });
  }
  accept() {
    console.log(this.requestDetail.qualification);
    
    if (this.requestDetail.qualification) {
      this.openQualification.emit('openQualification');
    } else {
      this._ipc.send('OpenRec');
    }
  }
}
