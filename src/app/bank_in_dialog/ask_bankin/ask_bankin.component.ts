import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { SharedDataService } from './../../shared/sharedData.service';
import { Submit_bank_slipComponent } from './../submit_bank_slip/submit_bank_slip.component';
@Component({
  selector: 'app-ask_bankin',
  templateUrl: './ask_bankin.component.html',
  styleUrls: ['./ask_bankin.component.css']
})
export class Ask_bankinComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<Ask_bankinComponent>, private data: SharedDataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
    this.openDialog();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Submit_bank_slipComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
