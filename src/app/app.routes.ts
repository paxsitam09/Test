import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : '' , loadComponent:()=> import('./pages/login/login.component').then(a=>a.LoginComponent)},
    {path : 'browse' , loadComponent:()=> import('./pages/browse/browse.component').then(a=>a.BrowseComponent)},
    {path : 'shows' , loadComponent:()=> import('./pages/shows-list/shows-list.component').then(a=>a.ShowsListComponent)},
    {path : 'search' , loadComponent:()=> import('./pages/search/search.component').then(a=>a.SearchComponent )},
    {path : 'movie/:id' , loadComponent:()=> import('./pages/movie-details/movie-details.component').then(a=>a.MovieDetailsComponent)}
];