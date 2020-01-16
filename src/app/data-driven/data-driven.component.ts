import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  public fillUp = true;
  public edit = false;
  zipcode: string
  state: string
  city: string
  street: string
  email: string
  lastname: string
  firstname: string
  zipcode2: string
  state2: string
  city2: string
  street2: string
  email2: string
  lastname2: string
  firstname2: string

  reactiveForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmitData() {
    this.edit = true;
  }
}
