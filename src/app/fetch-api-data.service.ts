import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://tims-movie-api.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
const err = new Error('test'); throwError(() => err);

export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'register', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  userDelete(): Observable<any> {
    const token = localStorage.getItem('token');
   
    return this.http.delete(apiUrl + 'deregister/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}
    ).pipe(
    catchError(this.handleError)
    );
  }
  userEdit(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
 
    return this.http.put(apiUrl + 'update/:Username', userDetails, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}
    ).pipe(
    catchError(this.handleError)
    );
  }



  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  getMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'genre/:Name', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'director/:Name', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  getUserFavMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username/movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  addFavMovie(FavMovie: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(FavMovie);
    return this.http.post(apiUrl + ':Username/add/:movieid', FavMovie, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
    catchError(this.handleError)
    );
  }
  removeFavMovie(FavMovie: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(FavMovie);
    return this.http.post(apiUrl + ':Username/remove/:movieid', FavMovie, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
    catchError(this.handleError)
    );
  }



// Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  }



private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}