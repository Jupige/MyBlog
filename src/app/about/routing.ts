import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../shared';
import { AboutComponent } from './about.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forChild(composeRoutings());

