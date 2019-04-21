import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from "./home-page/home-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ComponentsModule } from "./../components/components.module";
import { RecorderComponent } from './recorder/recorder.component';

const homeComponent =[
  HomePageComponent
]
@NgModule({
  declarations: [
    ...homeComponent,
    RecorderComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [],
  exports:[HomePageComponent]
})
export class PagesModule { }
