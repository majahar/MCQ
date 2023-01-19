import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../utility.service';
interface Question {
  name: string,
  code: string
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  questionType: Question[];
  selectedQuestionTypeId: string ='';

  displayModal: boolean = false;
  isSubmitted = false;
  questoinForm = this.fb.group({
    questionType : ['CL',Validators.required],
    question: ['',Validators.required],
    answers:this.fb.array([this.createAnswer()])
   
  });

  constructor(private fb: FormBuilder, private utilityServices : UtilityService) {
    this.questionType = [
      {name: 'Checkbox list', code: 'CL'},
      {name: 'Paragraph', code: 'P'}

  ];
   }
   get answers():FormArray{
    return <FormArray> this.questoinForm.get('answers');
  }

  ngOnInit(): void {
  }
  showModalDialog() {
    this.displayModal = true;
}
addAnswer() {
  this.answers.push(this.createAnswer());
}
createAnswer():FormGroup{

  return this.fb.group({
    answer:[null]
  })
}
onSubmit() {
  this.isSubmitted = true;
  console.log(this.questoinForm.controls)
  if(this.questoinForm.status != 'VALID'){
    return;
  }

  this.utilityServices.getQaData(this.questoinForm.value);

}
showAnswers = true;
selectQuestionType(event : any){
  //let questType= this.questoinForm.controls.questionType.value;
  // console.log(event.value.code == 'P')
  if(event.value.code == 'P'){
    // const arr = <FormArray>this.questoinForm.controls.answers;
    // arr.controls = [];
    this.showAnswers = false;
  }else{
    // this.questoinForm = this.fb.group({
    //   questionType : ['',Validators.required],
    //   question: ['',Validators.required],
    //   answers:this.fb.array([this.createAnswer()],Validators.required)
     
    // });
    this.showAnswers = true;

  }
  

}


}
