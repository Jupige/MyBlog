import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../shared';
import { NotfoundComponent } from './notfound.component';

export const routes: Routes = [
    { path: '', component: NotfoundComponent },
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forChild(composeRoutings());

