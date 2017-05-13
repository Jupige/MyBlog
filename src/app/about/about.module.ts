import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings
  ],
  declarations: [AboutComponent],
  providers: [{
    provide: 'ExistingAuthService',
    useExisting: AuthService
  }]
})
export class AboutModule {
  constructor(auth: AuthService) { }
}
