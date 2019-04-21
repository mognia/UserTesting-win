import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-req-review',
  templateUrl: './req-review.component.html',
  styleUrls: ['./req-review.component.css']
})
export class ReqReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() declinedReq = new EventEmitter<any>();
  @Output() acceptReq = new EventEmitter<any>();
}
