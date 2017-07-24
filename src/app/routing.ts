import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './shared';
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'archives', loadChildren: './archives/archives.module#ArchivesModule' },
    { path: 'tags', loadChildren: './tags/tags.module#TagsModule' },
    // { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'about', component: AboutComponent},
    { path: 'notfound', loadChildren: './notfound/notfound.module#NotFoundModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forRoot(composeRoutings());

