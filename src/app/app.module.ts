import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppForm1Component } from './app-form1/app-form1.component';
import { AppForm2Component } from './app-form2/app-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppForm1Component,
    AppForm2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
