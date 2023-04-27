import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { AddPersonComponent } from '../add-person/add-person.component';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  showModal(person: Person | null): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: person ? 'Edit Person' : 'Add Person',
      nzContent: AddPersonComponent,
      nzComponentParams: { },
      nzFooter: null,
    });
    modalRef.afterClose.subscribe((result: Person | undefined) => {
      if (result) {
        if (person) {
          this.personService.updatePerson(result);
        } else {
          this.personService.addPerson(result);
        }
        this.persons = this.personService.getPersons();
      }
    });
  }
}
