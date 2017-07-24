import {BrowserAnimationsModule} from '_@angular_platform-browser@4.0.3@@angular/platform-browser/animations';
import {DxDataGridModule} from 'devextreme-angular';
import { DialogModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings,
    DxDataGridModule,
    DialogModule,
    SharedModule,
    BrowserAnimationsModule
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
