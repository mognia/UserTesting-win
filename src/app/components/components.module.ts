import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ReqListComponent } from './req-list/req-list.component';

const materialModules = [
  MatButtonModule,
  MatMenuModule
]
@NgModule({
    exports: [
        NavbarComponent,
        ReqListComponent],
    declarations: [
        NavbarComponent,
        ReqListComponent
    ],
    imports: [
        BrowserModule,
        ...materialModules
    ],
    providers: [],
    bootstrap: [],
})
export class ComponentsModule { }
