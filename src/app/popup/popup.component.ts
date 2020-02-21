import { Component, OnInit, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { InteractionService } from '../interaction.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  dataArray: Array<any>;
  tripnumber1;
  constructor(public dialogRef: MatDialogRef<DisplayComponent>, private intSer: InteractionService) {
    this.intSer._inputFormData.subscribe(tripnumber => this.tripnumber1 = tripnumber)
  }

  ngOnInit() {
    //this.intSer._inputFormData.subscribe(tripnumber => this.dataArray.push(tripnumber));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
