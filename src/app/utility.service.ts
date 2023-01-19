import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public _qaData: BehaviorSubject<any> = new BehaviorSubject([]);
  public _reviewAnswers: BehaviorSubject<any> = new BehaviorSubject([]);


  constructor( private router : Router) { }
  getQaData(data : any) {
        this._qaData.next(data);
        this.router.navigateByUrl('form/builder');

   
}
getReview(data : any) {
  this._reviewAnswers.next(data);
  this.router.navigateByUrl('form/answers');


}
}
