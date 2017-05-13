import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../shared';
import { TagsComponent } from './tags.component';

export const routes: Routes = [
    { path: '', component: TagsComponent },
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forChild(composeRoutings());

