import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit, inject } from '@angular/core';
import { Data, Router } from '@angular/router';
import { environment } from '../../../environment/environment';
import { CreateMoviesComponent } from '../create-movies/create-movies.component';
import { time } from 'console';


@Component({
  selector: 'app-display-movies',
  standalone: true,
  imports: [CreateMoviesComponent],
  templateUrl: './display-movies.component.html',
  styleUrl: './display-movies.component.css',
})
export class DisplayMoviesComponent implements OnInit{
  hours: string ='';
constructor(private shared: CreateMoviesComponent){
this.hours = this.shared.hour;
}
httpClient = inject( HttpClient)
router = inject( Router)
  movieslist: {
    id: string;
    title: string;
    description: string;
    year: string;
    rating: string;
    duration: string;
    genre: string;
    created_at: string;
  }[] = [];


  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.httpClient.get(`${environment.baseApiUrl}/movies`).subscribe({
      next: (data) => {
        this.movieslist = data as {
          id: string;
          title: string;
          description: string;
          year: string;
          rating: string;
          duration: string;
          genre: string;
          created_at: string;
        }[];
      },
      error: () => {
      throw new Error('Could Not Fetch Data')
      }
    });
  }
 

  onEdit(id: string) {
    this.router.navigate(['movies/update/' + id]);
  }

  onDelete(id: string) {
    try {
      this.httpClient.delete(`${environment.baseApiUrl}/movies/${id}`).subscribe({
        next: (data) => {
          this.fetchMovies();
        },
        error: () => {
          throw new Error('Not Deleted')
        }
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

}
