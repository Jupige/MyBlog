import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { Routings } from './routing';
import { AuthService } from '../shared';
import { BaPageTop, BaMsgCenter } from '../components/index';

@NgModule({
  imports: [
    CommonModule,
    Routings,
  ],
  declarations: [
    HomeComponent,
    BaPageTop,
    BaMsgCenter
  ],
  providers: [
    {
      provide: 'ExistingAuthService',
      useExisting: AuthService
    }
  ]
})
export class HomeModule {
  constructor(auth: AuthService) { }
}
