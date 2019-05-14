import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../../services/request-service.service';
@Component({
  selector: 'app-req-review',
  templateUrl: './req-review.component.html',
  styleUrls: ['./req-review.component.css']
})
export class ReqReviewComponent implements OnInit {
  requestDetail;
  constructor(
    private reqService: RequestService
  ) { }
  @Output() declinedReq = new EventEmitter<any>();
  @Output() acceptReq = new EventEmitter<any>();

  ngOnInit() {
    this.reqService.selectedDetail.subscribe(data => {
      this.requestDetail = data.requestDetail;
      console.log(this.requestDetail);
      

    });
  }
}
