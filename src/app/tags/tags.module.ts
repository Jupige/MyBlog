import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsComponent } from './tags.component';
import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings
  ],
  declarations: [TagsComponent],
  providers: [AuthService]
})
export class TagsModule { }
