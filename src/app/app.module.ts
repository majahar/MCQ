import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AnswerComponent } from './answer/answer.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';



 const PRIME_MODULES =[ CardModule,ButtonModule,DialogModule,DropdownModule, InputTextareaModule, CheckboxModule]


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    FormBuilderComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ...PRIME_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
