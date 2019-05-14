import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  selectedComponent = 'userInfo';
  constructor() { }

  ngOnInit() {
    console.log(this.selectedComponent);
    
  }
  pageHandeler(e) {
  this.selectedComponent = e;
  }
}
