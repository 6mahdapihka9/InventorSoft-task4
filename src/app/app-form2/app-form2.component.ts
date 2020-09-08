import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-form2',
  templateUrl: './app-form2.component.html',
  styleUrls: ['../app-form.component.css']
})

export class AppForm2Component implements OnInit {
  // FormGroup объединяет в себе FromControl
  myForm2: FormGroup;
  // FormControl — это класс, который позволяет напрямую создавать отдельные элементы ввода и управлять ими.
  // Конструктор new FormControl() принимает три необязательных параметра:
  // - изначальное значение данных
  // - массив валидаторов
  // - массив асинхронных валидаторов
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
