import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Person[];
  personToGet: Person[] = [
    { name: 'John Doe', age: 25, address: '123 Main St' },
    { name: 'Jane Smith', age: 30, address: '456 Elm St' },
    { name: 'Bob Johnson', age: 40, address: '789 Oak St' },
    { name: 'Alice Williams', age: 35, address: '101 Pine St' },
    { name: 'Mike Brown', age: 50, address: '222 Maple St' },
  ];
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
