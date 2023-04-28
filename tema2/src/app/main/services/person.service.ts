import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Person[];
  baseUrl: string = 'assets/api/persons.json';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getPerson(name: String): Observable<Person | undefined> {
    return this.getPersons().pipe(
      map((products: Person[]) => products.find((p) => p.name === name))
    );
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person, this.httpOptions);
  }
}
