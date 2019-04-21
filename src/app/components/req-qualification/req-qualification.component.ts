import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-req-qualification',
  templateUrl: './req-qualification.component.html',
  styleUrls: ['./req-qualification.component.css']
})
export class ReqQualificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() declinedQual = new EventEmitter<any>();
  @Output() acceptQual = new EventEmitter<any>();
}
