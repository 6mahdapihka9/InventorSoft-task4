import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validate, validateComponent} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-app-form2',
  templateUrl: './app-form2.component.html',
  styleUrls: ['../app-form.component.css']
})
export class AppForm2Component implements OnInit {
  myForm2: FormGroup;

  constructor() {
    this.myForm2 = new FormGroup({
      username: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm2);
  }
}
