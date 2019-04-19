import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    exports: [NavbarComponent],
    declarations: [
        NavbarComponent
    ],
    imports: [
        BrowserModule,

    ],
    providers: [],
    bootstrap: [],
})
export class ComponentsModule { }
