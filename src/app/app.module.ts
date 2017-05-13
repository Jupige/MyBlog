import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routings } from './routing';
import { AuthService } from './shared';

// import { HomeModule } from "app/home/home.module";
// import { AboutModule } from "app/about/about.module";
// import { ArchivesModule } from "app/archives/archives.module";
// import { NotFoundModule } from "app/notfound/notfound.module";
// import { TagsModule } from "app/tags/tags.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routings,

    // HomeModule,
    // AboutModule,
    // ArchivesModule,
    // NotFoundModule,
    // TagsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(auth: AuthService) { }
}
