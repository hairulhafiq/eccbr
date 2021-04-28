import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bank_in_dialog',
  templateUrl: './bank_in_dialog.component.html',
  styleUrls: ['./bank_in_dialog.component.css']
})
export class Bank_in_dialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<Bank_in_dialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
