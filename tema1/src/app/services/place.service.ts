import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Place } from '../interfaces/place';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private palcesUrl = 'assets/api/places.json';
  private artcilesUrl = 'assets/api/articles.json';

  constructor(private http: HttpClient) {}

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.palcesUrl).pipe(
      tap((data) => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.artcilesUrl).pipe(
      tap((data) => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPlaceById(id: number): Observable<Place | undefined> {
    return this.getPlaces().pipe(
      map((products: Place[]) => products.find((p) => p.id === id))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}
