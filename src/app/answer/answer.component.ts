import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  constructor(private utilityService : UtilityService,private location: Location
    ) {}
  review$ : any
  ngOnInit(){
     this.utilityService._reviewAnswers.subscribe( (res) => {
      this.review$ = res;
      console.log(this.review$)

    });
    }

  backToFormsBulder(){
    this.location.back();

  }

}
