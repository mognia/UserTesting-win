import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from "./home-page/home-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ComponentsModule } from "./../components/components.module";

const homeComponent =[
  HomePageComponent
]
@NgModule({
  declarations: [
    ...homeComponent
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
