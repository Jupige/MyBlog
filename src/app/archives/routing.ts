import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../shared';
import { ArchivesComponent } from './archives.component';

export const routes: Routes = [
    { path: '', component: ArchivesComponent },
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forChild(composeRoutings());

