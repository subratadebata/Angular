import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  public _inputFormData = new Subject<string>();
  teacherGreeted$ = this._inputFormData.asObservable();

  constructor() { }
  addCrib(tripnumber) {
    console.log("Login Service is called");
    console.log(tripnumber);
    this._inputFormData.next(tripnumber);
  }
}
