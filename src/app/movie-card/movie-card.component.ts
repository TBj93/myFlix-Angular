// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { Router } from '@angular/router';
import { DirectorComponent } from '../director/director.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private router: Router) { }

    openDirectorDialog(name: string, bio: string, birth: Date): void {
      
      this.dialog.open(DirectorComponent, {
        // Assigning the dialog a width
     data:{   name: name,
              bio: bio,
              birth: birth 

    },
            width: '280px'
            });
          } 
ngOnInit(): void {
  this.getMovies();
}

goToProfile(): void {
  this.router.navigate(['profile']);
}
logout(): void {
  localStorage.clear;
  this.router.navigate(['welcome']);
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
}