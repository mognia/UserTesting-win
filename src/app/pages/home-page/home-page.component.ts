import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  step = 1;
  constructor() { 
    
  }

  ngOnInit() {
  }
  reqSelected(){
    this.step = 2
  }
}
