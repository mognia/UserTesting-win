import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ReqQualificationComponent } from '../../components/req-qualification/req-qualification.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  requestDetail;
  step = 1;
  title = 'لیست درخواست ها';
  constructor() {
  }

  ngOnInit() {
  }
  reqSelected() {
    this.step = 2;
    this.title = 'بررسی درخواست';
  }
  declinedReq() {
    this.step = 1;
    this.title = 'لیست درخواست ها';
  }
  openQualification(e) {
    this.requestDetail = e;
    this.step = 3;
    this.title = 'بررسی صلاحیت';
  }
  declinedQual() {
    this.step = 2;
    this.title = 'بررسی درخواست';
  }
}
