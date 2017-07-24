import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routings } from './routing';
import { AuthService } from './shared';
import { GlobalState } from "./core/index";
import { AboutModule } from "./about/about.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routings,
    AboutModule,
  ],
  providers: [AuthService, GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(auth: AuthService) { }
}
