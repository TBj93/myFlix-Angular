// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { Router } from '@angular/router';
import { DirectorComponent } from '../director/director.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { GenreComponent } from '../genre/genre.component';
import { MatDialog} from '@angular/material/dialog';

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


ngOnInit(): void {
  this.getMovies();
  this.getFavmovies();
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

getFavmovies(): void  {
this.fetchApiData.getUserFavMovie().subscribe((resp:any) => {
this.favmovies =resp;
console.log(this.favmovies);
return this.favmovies;

}
);
}

isInFavmovies(_id: string): boolean {
  return this.favmovies.includes(_id) 
}
addToFavs(_id: string): void {
  
this.fetchApiData.addFavMovie(_id).subscribe((result) => {
  
  this.ngOnInit();
})


}

removeFromFavs(_id: string): void {
  
  this.fetchApiData.removeFavMovie(_id).subscribe((result) => {
    
    this.ngOnInit();
  })
  
  
  }


}

