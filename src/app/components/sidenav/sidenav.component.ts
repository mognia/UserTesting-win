import { Component, OnInit } from '@angular/core';
import MenuItem from './menu'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  items: MenuItem[] = [
    { id: 'userInfo', name: 'اطلاعات کاربری' },
    { id: 'navItem', name: 'وضعیت تست ها' },
    { id: 'navItem', name: 'گردش مالی' }
  ];
  selected = this.items[0];
  constructor() {
  }

  ngOnInit() {
  }
  activateClass(item) {
    this.selected = item;
  }
}
