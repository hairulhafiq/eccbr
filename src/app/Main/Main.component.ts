import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Bank_in_dialogComponent } from '../bank_in_dialog/bank_in_dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { SharedService } from './../shared/shared.service';
import { Dailysales } from './../Classes/dailysales';

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
  NoOfShift: number = 1;
  buttonclicked = false;
  testdata: any;
  alert: boolean = false;

  onClosing() {
    this.stopTab = 1;
  }

  addTab(CLC: any, OB: any, CSV: any, CSI: any, CSD: any, COH: any, USR: any) {

    var dailysales = new Dailysales;


    if (this.stopTab == 1) {
      // ($event.target as HTMLButtonElement).disabled = true;
      this.buttonclicked = true;
      // this.service.postDailySales();
    }
    else if (this.stopTab == 0) {

      dailysales.ClinicCode = CLC;
      dailysales.ShiftId = this.NoOfShift;
      dailysales.OpnMoneyInSafe = OB;
      dailysales.CashSales = CSV;
      dailysales.InvCashSales = CSI;
      dailysales.CashReceived = CSI;
      dailysales.CanCashSales = 0;
      dailysales.CashOnHand = COH;
      dailysales.CashDiff = CSD;
      dailysales.DiffRemark = "";
      dailysales.ClsMoneyInSafe = 1000;
      dailysales.CreatedBy = USR;

      console.log(dailysales);
      this.NoOfShift = this.NoOfShift + 1;
      this.tabs.push('Shift ' + this.NoOfShift);

      console.warn("Result is here", dailysales);

      this.service.postDailySales(dailysales).subscribe(data => {
        this.testdata = data;
        console.log(this.testdata)
      })
    }
    this.alert = true;

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Bank_in_dialogComponent, dialogConfig);
  }

  constructor(private dialog: MatDialog, private service: SharedService) {
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
