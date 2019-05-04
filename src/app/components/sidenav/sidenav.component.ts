import { Component, OnInit } from '@angular/core';
import MenuItem from './menu'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  items: MenuItem []= [
    {id: '0', name: 'اطلاعات کاربری'},
    {id: '2', name: 'وضعیت تست ها'},
    {id: '3', name: 'گردش مالی'}
];
  constructor() { }

  ngOnInit() {
  }

}
