import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    redirectTo: 'movies',
    pathMatch: 'full'
},
       {
        path:'display',
        loadComponent: () =>
            import('./Movies/display-movies/display-movies.component').then((x) => x.DisplayMoviesComponent)
       },
       {
        path:'create',
        loadComponent: () => 
            import('./Movies/create-movies/create-movies.component').then((x) => x.CreateMoviesComponent)
            
       },
       {path:'movies',
        loadComponent:() =>
            import('./Movies/home/home.component').then((x)=> x.HomeComponent)
       },{
        path: 'movies/update/:id',
        loadComponent:() =>
            import('./Movies/update-movies/update-movies.component').then((x) => x.UpdateMoviesComponent)
       }
       


];
