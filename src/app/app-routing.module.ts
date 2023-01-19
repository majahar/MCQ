import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [ 
  { path : '',component : QuestionComponent},
  { path : 'form/builder', component : FormBuilderComponent},
  { path : 'form/answers', component : AnswerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
