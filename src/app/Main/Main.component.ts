import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Bank_in_dialogComponent } from '../bank_in_dialog/bank_in_dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit {
  TodayDate = Date.now();

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Bank_in_dialogComponent, dialogConfig);
  }

  constructor(private dialog: MatDialog) {
    // this.locumExpenses = this.fb.group({
    //   doctorname: ['', Validators.required],
    //   icnumber: ['', Validators.required],
    //   payment: ['', Validators.required],
    //   remark: ['', Validators.required]
    // })
  }

  ngOnInit(): void {
  }

}
