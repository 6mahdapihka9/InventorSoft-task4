import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-form2',
  templateUrl: './app-form2.component.html',
  styleUrls: ['../app-form.component.css']
})

export class AppForm2Component implements OnInit {
  // FormGroup объединяет в себе FromControl
  myForm2: FormGroup;
  // Упрощение доступа к директивам formControlName
  get userName(){
    return this.myForm2.get('username') as FormControl;
  }
  get password(){
    return this.myForm2.get('password') as FormControl;
  }
  get emails(){
    return this.myForm2.get('emails') as FormArray;
  }
  // FormControl — это класс, который позволяет напрямую создавать отдельные элементы ввода и управлять ими.
  // Конструктор new FormControl() принимает три необязательных параметра:
  // - изначальное значение данных
  // - массив валидаторов
  // - массив асинхронных валидаторов
  constructor() {
    this.myForm2 = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(24)]),
      password: new FormControl(null, [Validators.required, this.hasNumbersAndLetters]),
      emails: new FormArray([])
    });
  }

  ngOnInit() {
  }

  addEmail(){
    this.emails.push(new FormControl(null, [Validators.required, Validators.email]));
  }
  removeEmail(i: number){
    console.log(this.myForm2);
    this.emails.removeAt(i);
  }
  onSubmit() {
    console.log(this.myForm2);
  }
  hasNumbersAndLetters(controlName: FormControl): {} {
    if (!controlName.value || controlName.value.search(/[\w]/g) > -1)
      return null;
    return {hasNumbersAndLetters: true};
  }
}
