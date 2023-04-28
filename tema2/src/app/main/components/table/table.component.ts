import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/main/interfaces/person';
import { PersonService } from 'src/app/main/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personService
      .getPersons()
      .subscribe((persons) => (this.persons = persons));
  }

  editPerson(newPerson: Person) {}
}
