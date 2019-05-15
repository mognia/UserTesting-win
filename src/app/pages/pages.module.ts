import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from './../components/components.module';
import { RecorderComponent } from './recorder/recorder.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';

import { UserPanelComponent } from './user-panel/user-panel.component';
import { TestsStatusComponent } from './tests-status/tests-status.component';
import { UserTurnoverComponent } from './user-turnover/user-turnover.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {NgxPaginationModule} from 'ngx-pagination';
const homeComponent = [
  HomePageComponent
];
@NgModule({
  declarations: [
    ...homeComponent,
    RecorderComponent,
    UserPanelComponent,
    TestsStatusComponent,
    UserTurnoverComponent,
    UserInfoComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    PagesRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HomePageComponent]
})
export class PagesModule { }
