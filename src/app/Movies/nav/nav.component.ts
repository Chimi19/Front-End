import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTES, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { DisplayMoviesComponent } from '../display-movies/display-movies.component';
import { CreateMoviesComponent } from '../create-movies/create-movies.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,

    RouterModule,
    DisplayMoviesComponent,
    CreateMoviesComponent
    
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  isNavbarCollapsed: boolean = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  logo: string='assets/istockphoto-1735010789-1024x1024.jpg'
}
