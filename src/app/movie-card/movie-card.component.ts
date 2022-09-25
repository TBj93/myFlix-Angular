// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';

import { DirectorComponent } from '../director/director.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { GenreComponent } from '../genre/genre.component';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  favmovies: any[] = [];

  constructor(public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private router: Router) { }


 /**
   * Open Director Dialog
   * @param name 
   * @param bio
   * @param birth
   * @returns director dobject
   */
    openDirectorDialog(name: string, bio: string, birth: Date): void {
      
      this.dialog.open(DirectorComponent, {
        // Assigning the dialog a width
     data:{   name: name,
              bio: bio,
              birth: birth 

    },
            width: '50%',
            height: '40%'
            });
          } 

 /**
   * Open Genre Dialog
   * @param name 
   * @param description
   * @returns genre objcect
   */
          openGenreDialog(name: string, description: string): void {
      
            this.dialog.open(GenreComponent, {
              // Assigning the dialog a width
           data:{   name: name,
            description: description
      
          },
                  width: '50%',
                  height: '40%'
                  });
                } 

 /**
   * Open Synopsis Dialog
   * @param title
   * @param description
   * @returns synopsis objcect
   */
                openSynopsisDialog(title: string, description: string): void {
      
                  this.dialog.open(SynopsisComponent, {
                    // Assigning the dialog a width
                 data:{   title: title,
                          description: description
            
                },
                        width: '50%',
                        height: '40%'
                        });
                      } 


    /**
   * initializes get movie functions
   * @function getMovies
   * @function getFavmovies
   */
ngOnInit(): void {
  this.getMovies();
  this.getFavmovies();
 
}

  /**
   * route to profile page
   * @route profile
   */
goToProfile(): void {
  this.router.navigate(['profile']);
}
/**
   * route to welcome page/ logout
   * @route welcome
   */
logout(): void {
  localStorage.clear;
  this.router.navigate(['welcome']);
}




  /**
   *  list of movies. sets movies state to the JSON file returned 
   * @function getMovies
   * @returns array with all movies objects 
   */

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  
  /**
   *  list of favmovies. sets  favmovies state to the JSON file returned 
   * @function getFavmovies
   * @returns array with all favmovies objects 
   */
getFavmovies(): void  {
this.fetchApiData.getUserFavMovie().subscribe((resp:any) => {
this.favmovies =resp;
console.log(this.favmovies);
return this.favmovies;

}
);
}
  
  /**
   *  checks if movie is in favmovie list
   * @param _id
   * @returns boolean
   */
isInFavmovies(_id: string): boolean {
  return this.favmovies.includes(_id) 
}

  /**
   *  adds movie to favmovies
    * @param _id
   * @function addFavMovie
   */
addToFavs(_id: string): void {
  
this.fetchApiData.addFavMovie(_id).subscribe((result) => {
  
  this.ngOnInit();
})


}

 /**
   *  adds movie to favmovies
    * @param _id
   * @function removeFavMovie
   */
removeFromFavs(_id: string): void {
  
  this.fetchApiData.removeFavMovie(_id).subscribe((result) => {
    
    this.ngOnInit();
  })
  
  
  }


}

