import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit_bank_slip',
  templateUrl: './submit_bank_slip.component.html',
  styleUrls: ['./submit_bank_slip.component.css']
})
export class Submit_bank_slipComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<Submit_bank_slipComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
