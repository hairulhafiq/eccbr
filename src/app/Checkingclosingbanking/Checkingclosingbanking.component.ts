import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { SharedDataService } from './../shared/sharedData.service';
import { Ask_bankinComponent } from './../bank_in_dialog/ask_bankin/ask_bankin.component';

@Component({
  selector: 'app-Checkingclosingbanking',
  templateUrl: './Checkingclosingbanking.component.html',
  styleUrls: ['./Checkingclosingbanking.component.css']
})
export class CheckingclosingbankingComponent implements OnInit {
  stopTab: number = 0;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<CheckingclosingbankingComponent>, private data: SharedDataService) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.openDialog();
  }

  onYesClick(): void {
    this.data.stopTab = this.stopTab + 1;
    this.dialogRef.close();
    this.openDialog();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Ask_bankinComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
