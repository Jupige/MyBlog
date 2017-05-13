import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './shared';
// import { HomeComponent } from "app/home/home.component";
// import { ArchivesComponent } from "app/archives/archives.component";
// import { TagsComponent } from "app/tags/tags.component";
// import { AboutComponent } from "app/about/about.component";
// import { NotfoundComponent } from "app/notfound/notfound.component";

export const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'archives', loadChildren: './archives/archives.module#ArchivesModule' },
    { path: 'tags', loadChildren: './tags/tags.module#TagsModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'notfound', loadChildren: './notfound/notfound.module#NotFoundModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];

// export const routes: Routes = [
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent },
//     { path: 'archives', component: ArchivesComponent },
//     { path: 'tags', component: TagsComponent },
//     { path: 'about', component: AboutComponent },
//     { path: 'notfound', component: NotfoundComponent },
//     { path: '**', redirectTo: 'notfound' }
// ];

export function composeRoutings() {
    return routes;
}

export const Routings = RouterModule.forRoot(composeRoutings());

