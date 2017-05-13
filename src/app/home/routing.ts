import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../shared';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forChild(composeRoutings());

