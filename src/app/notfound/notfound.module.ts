import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from './notfound.component';
import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings
  ],
  declarations: [NotfoundComponent],
  providers: [AuthService]
})
export class NotFoundModule { }
