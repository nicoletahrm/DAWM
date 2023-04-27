import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private persons: Person[] = [
    { name: 'John Doe', age: 25, address: '123 Main St' },
    { name: 'Jane Smith', age: 30, address: '456 Elm St' },
    { name: 'Bob Johnson', age: 40, address: '789 Oak St' },
    { name: 'Alice Williams', age: 35, address: '101 Pine St' },
    { name: 'Mike Brown', age: 50, address: '222 Maple St' },
  ];

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  updatePerson(person: Person): void {
    const index = this.persons.findIndex((p) => p.name === person.name);
    if (index !== -1) {
      this.persons[index] = person;
    }
  }
}
