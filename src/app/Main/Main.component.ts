import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Bank_in_dialogComponent } from '../bank_in_dialog/bank_in_dialog.component';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit {
  TodayDate = Date.now();
  tabs = ['Shift 1'];
  selected = new FormControl(0);
  stopTab: number = 0;
  NoOfShift = 1;
  buttonclicked = false;

  constructor(private dialog: MatDialog) {

  }

  onClosing($event: any) {
    this.stopTab = 1;
  }

  addTab($event: any) {

    if (this.stopTab == 1) {
      // ($event.target as HTMLButtonElement).disabled = true;
      this.buttonclicked = false;
    }
    else if (this.stopTab == 0) {
      this.NoOfShift = this.NoOfShift + 1;
      this.tabs.push('Shift ' + this.NoOfShift);
    }

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Bank_in_dialogComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
