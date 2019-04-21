import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { ReqListComponent } from './req-list/req-list.component';
import { ReqReviewComponent } from './req-review/req-review.component';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatCardModule
]
@NgModule({
    exports: [
        NavbarComponent,
        ReqListComponent,
        ReqReviewComponent
    ],
    declarations: [
        NavbarComponent,
        ReqListComponent,
        ReqReviewComponent
    ],
    imports: [
        BrowserModule,
        ...materialModules
    ],
    providers: [],
    bootstrap: [],
})
export class ComponentsModule { }
