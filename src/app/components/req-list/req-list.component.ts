import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() reqSelected = new EventEmitter<any>();

}
