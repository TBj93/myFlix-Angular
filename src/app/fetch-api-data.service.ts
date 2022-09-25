import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';







const apiUrl = 'https://tims-movie-api.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})


export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
  /**
   * Registration 
   * @param userDetails  
   *  @method post
   * @returns user message
   */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'register', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  /**
   * Login
   * @param userDetails  
   * @method post
   * @returns user message
   */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }

   /**
   * get User Data
   *  
   * @method get
   * @returns user message
   * @returns JSON object/ user data
   */
  getUser(): Observable<any> {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `users/${user}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
 /**
   * Delete User Data
   *  
   * @method delete
   * @returns user message
   * @returns JSON object/ user data
   */
  userDelete(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(apiUrl + `deregister/${user}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}
    ).pipe(
      map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
 /**
   * Update User Data
   *  @param userDetails  
   * @method put
   * @returns user message

   */
  userEdit(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.put(apiUrl + `update/${user}`, userDetails, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).pipe(
      
      catchError(this.handleError)
    );
  }




 /**
   * Get all movies
   *  
   * @method get
   * @returns JSON object/ movies
   */
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
  /**
   * Get  movie
   *  
   * @method get
   * @returns JSON object/ movie
   */
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

   /**
   * Get  genre
   *  
   * @method get
   * @returns JSON object/ genre
   */
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

   /**
   * Get  director
   *  
   * @method get
   * @returns JSON object/ director
   */
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
   /**
   * Get  favmovie
   *  
   * @method get
   * @returns JSON object/ movie
   */
  getUserFavMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.get(apiUrl + `${user}/movies`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

   /**
   * Add  favmovie
   *  
   * @method post
   * @param ID
   * @returns JSON object/ movie
   * @returns user message
   */
  addFavMovie(ID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
   
    return this.http.post(apiUrl + `${user}/add/${ID}`, null,  {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
    catchError(this.handleError)
    );
  }

   /**
   * remove  favmovie
   * @param ID
   * @method delete
   * @returns JSON object/ movie
   * @returns user message
   */
  removeFavMovie(ID: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http.delete(apiUrl + `${user}/remove/${ID}`,   {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
    catchError(this.handleError)
    );
  }



// Non-typed response extraction
private extractResponseData(res: any): any {
  const body = res;
  return body || {};
}


   /**
   * handle error

   * @returns error message
   */

private handleError(error: HttpErrorResponse): any {
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occured:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error Body is: ${error.error}`
    );
  }
  return throwError(
    'Something bad happened; please try again later.'
  );
}
}