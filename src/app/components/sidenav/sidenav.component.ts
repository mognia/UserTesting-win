import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import MenuItem from './menu';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() selectedItem = new EventEmitter();

  items: MenuItem[] = [
    { id: 'userInfo', name: 'اطلاعات کاربری' },
    { id: 'testsStatus', name: 'وضعیت تست ها' },
    { id: 'userTurnover', name: 'گردش مالی' }
  ];
  selected = this.items[0];
  constructor() {
  }

  ngOnInit() {
  }
  activateClass(item) {
    this.selected = item;
    this.selectedItem.emit(item.id);
  }
}
