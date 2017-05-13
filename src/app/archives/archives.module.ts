import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesComponent } from './archives.component';

import { Routings } from './routing';
import { AuthService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    Routings
  ],
  declarations: [ArchivesComponent],
  providers: [AuthService]
})
export class ArchivesModule { }
