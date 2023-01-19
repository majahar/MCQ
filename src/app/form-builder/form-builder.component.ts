import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
qdata : any;
reviewData : any;
isSubmitted = false;
reviewForm = this.fb.group({
    answer : ['',Validators.required],
    checkBoxAnswers : ['']
   
  });
  constructor(private fb: FormBuilder, private utilityService : UtilityService) {}

  ngOnInit(){
     this.utilityService._qaData.subscribe( (res) => {
      this.qdata = res;
      console.log(this.qdata)

    });
    }
    reviewAnswer(){
      console.log(this.reviewForm.value)

      const reviewData = {
        question : this.qdata.question,
        answer : this.reviewForm.controls.answer.value,
        questionType : this.qdata.questionType,
        checkBoxAnswers : this.reviewForm.controls.checkBoxAnswers.value

      }
      this.utilityService.getReview(reviewData);

    }

}
