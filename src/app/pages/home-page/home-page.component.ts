import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  step = 1;
  title = 'لیست درخواست ها'
  constructor() { 
    
  }

  ngOnInit() {
  }
  reqSelected(){
    this.step = 2;
    this.title = 'بررسی درخواست'
  }
  declinedReq(){
    this.step = 1;
    this.title = 'لیست درخواست ها'
  }
}
