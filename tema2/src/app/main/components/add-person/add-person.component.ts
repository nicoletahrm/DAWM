import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../interfaces/person';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  newPerson: Person;
  private unsubscribe$ = new Subject();
  message: String;

  constructor(private personService: PersonService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.personForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });

    this.personForm.valueChanges
      .pipe(
        filter(() => !this.personForm.pristine),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.newPerson = {
          name: this.getName?.value,
          age: this.getAge?.value,
          address: this.getAddress?.value,
        };
      });
    this.message = this.getName?.value;
  }

  addPerson() {
    this.message = this.newPerson.name;
    this.personService.addPerson(this.newPerson).subscribe();
  }

  get getName() {
    return this.personForm.get('name');
  }

  get getAge() {
    return this.personForm.get('age');
  }

  get getAddress() {
    return this.personForm.get('address');
  }
}
