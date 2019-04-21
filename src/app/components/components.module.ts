import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { ReqListComponent } from './req-list/req-list.component';
import { ReqReviewComponent } from './req-review/req-review.component';
import { ReqQualificationComponent } from './req-qualification/req-qualification.component';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatRadioModule
]
@NgModule({
    exports: [
        NavbarComponent,
        ReqListComponent,
        ReqReviewComponent,
        ReqQualificationComponent
    ],
    declarations: [
        NavbarComponent,
        ReqListComponent,
        ReqReviewComponent,
        ReqQualificationComponent
    ],
    imports: [
        BrowserModule,
        ...materialModules
    ],
    providers: [],
    bootstrap: [],
})
export class ComponentsModule { }
