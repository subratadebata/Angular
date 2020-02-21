import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { DisplayService } from './display.service';
import { InteractionService } from '../interaction.service';
export interface LoggedInUserEventArgs {
  tripnumber: string;

}
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  formData: any;
  displayForm = this.fb.group({
    tripnumber: ['', Validators.required],
    operatingdate: [''],
    timeformat: [''],
    flightnumber: [''],
    fromdate: [''],
    todate: [''],
    crewid: ['']
  })
  onSubmit() {
    /*  this.service.onSubmit(); */
    // TODO: Use EventEmitter with form value
    var tripnumber = this.displayForm.controls['tripnumber'].value;
    /* console.log("tripnumber" + tripnumber); */
    var operatingdate = this.displayForm.controls['operatingdate'].value;
    var timeformat = this.displayForm.controls['timeformat'].value;
    var flightnumber = this.displayForm.controls['flightnumber'].value;
    var fromdate = this.displayForm.controls['fromdate'].value;
    var todate = this.displayForm.controls['todate'].value;
    var crewid = this.displayForm.controls['crewid'].value;
    this.intSer.addCrib(tripnumber);

  }

  constructor(private fb: FormBuilder, private dialog: MatDialog, private service: DisplayService, public intSer: InteractionService) { }

  ngOnInit() {
  }
  openDialog() {

    const dialogConf = new MatDialogConfig();
    dialogConf.disableClose = false;
    dialogConf.autoFocus = true;
    dialogConf.width = "60%";
    dialogConf.height = "60%"
    this.dialog.open(PopupComponent, dialogConf);
    var tripnumber = this.displayForm.controls['tripnumber'].value;
    this.intSer.addCrib(tripnumber);
  }
}
