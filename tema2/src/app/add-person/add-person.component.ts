import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../models/person';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  @Input() title: string;
  @Input() person: Person;
  @Output() onSave = new EventEmitter<Person>();

  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.person) {
      this.form.patchValue(this.person);
    }
  }

  get buttonText(): string {
    return this.loading ? 'Saving...' : 'Save';
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    const person: Person = this.form.value;

    this.onSave.emit(person);
  }
}
