import { Injectable, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoggedInUserEventArgs } from './display.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  displayForm = this.fb.group({
    tripnumber: ['', Validators.required],
    operatingdate: ['', Validators.required],
    timeformat: [''],
    flightnumber: [''],
    fromdate: [''],
    todate: [''],
    crewid: ['']
  })
  $isLoggedIn = new EventEmitter();
  user: LoggedInUserEventArgs = {
    tripnumber: ""
  };
  constructor(private fb: FormBuilder) { }
  onSubmit() {
    /*  console.log("Login Service is called");
     var tripnumber = this.displayForm.controls['tripnumber'].value;
     console.log("tripnumber" + tripnumber);
  */
  }
}
