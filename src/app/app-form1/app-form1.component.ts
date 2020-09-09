import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-app-form1',
  templateUrl: './app-form1.component.html',
  styleUrls: ['../app-form.component.css']
})
export class AppForm1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm1: NgForm): void{
    console.log(myForm1);
  }
}
