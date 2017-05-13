import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings,
  ],
  declarations: [HomeComponent],
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
