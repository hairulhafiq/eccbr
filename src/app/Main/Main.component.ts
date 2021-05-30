import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Bank_in_dialogComponent } from '../bank_in_dialog/bank_in_dialog.component';
import { CheckingclosingbankingComponent } from '../Checkingclosingbanking/Checkingclosingbanking.component';
// import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { SharedService } from './../shared/shared.service';
// import { Dailysales } from './../Classes/dailysales';
// import { LoginComponent } from './../login/login.component';
import { SharedDataService } from './../shared/sharedData.service';
import { RemarkComponent } from '../Remark/Remark.component';

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
  NoOfShift: any = 1;
  buttonclicked: boolean;
  testdata: any;
  alert: boolean = false;
  cashDiff: number;
  username1: any;
  clinicname: any;
  cliniccode: any;
  closingsale: number;
  float: any;
  myDate = new Date();
  myDate1: any;
  MIS: any;
  LFC: any;
  CFC: any;

  ClinicCode: string;
  ShiftId: string;
  OpnMoneyInSafe: number;
  CashSales: number;
  InvCashSales: number;
  CashReceived: number;
  CanCashSales: number;
  CashOnHand: number;
  CashDiff: number;
  DiffRemark: string = "";
  ClsMoneyInSafe: number;
  CreatedBy: string;
  Diffalert: boolean = false;
  dailysaletrue: boolean = false;

  onClosing() {
    this.stopTab = 1;
  }
  didModify(value: any, value1: any, value2: any) {
    let i = Number(value);
    let u = Number(value1);
    let l = Number(value2);

    this.cashDiff = i - u;
    this.closingsale = l + i;

    if (this.cashDiff !== 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(RemarkComponent, dialogConfig);
    }
    else {
      this.buttonclicked = false;
    }

  }

  addTab(CLC: any, OB: any, CSV: any, CSI: any, COH: any, USR: any) {
    this.DiffRemark = this.data.remark;

    var dailysales = {
      ClinicCode: CLC,
      ShiftId: String(this.NoOfShift),
      OpnMoneyInSafe: Number(OB),
      CashSales: Number(CSV),
      InvCashSales: Number(CSI),
      CashReceived: Number(CSI),
      CanCashSales: 0,
      CashOnHand: Number(COH),
      CashDiff: this.cashDiff,
      DiffRemark: this.DiffRemark,
      ClsMoneyInSafe: this.closingsale,
      CreatedBy: USR
    };

    this.testdata = this.service.postDailySales(dailysales).subscribe(res => {
      if (res = "1") {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(CheckingclosingbankingComponent, dialogConfig);
        if (this.stopTab == 1) {
          this.buttonclicked = true;
        }
        else if (this.stopTab == 0) {

          this.NoOfShift = this.NoOfShift + 1;
          this.tabs.push('Shift ' + this.NoOfShift);
          this.dailysaletrue = true;
        }
        alert("Success fully saved")
        this.alert = true;

      }
      else {
        alert("Failed To Upload Data")
      }
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Bank_in_dialogComponent, dialogConfig);
  }

  constructor(private dialog: MatDialog, private service: SharedService, private datePipe: DatePipe, private data: SharedDataService) {
    this.myDate1 = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  getFloatBalance(val: any) {
    this.buttonclicked = true;
    this.service.getFloat(this.myDate1, val).subscribe(data => {
      this.float = data;
      this.MIS = this.float.MISOpnBalance;
      this.LFC = this.float.LCFTOpnBalance;
      this.CFC = this.float.PCFTOpnBalance;
      this.NoOfShift = Number(this.float.LatestShiftID) + 1;
      console.log(this.NoOfShift)
      if (this.NoOfShift != 0) {
        for (let i in this.NoOfShift) {
          this.tabs.push('Shift ' + this.NoOfShift[i])
        }
      }
    })
    this.Diffalert = this.data.alertDiff;
    this.buttonclicked = this.data.buttonclicked;
  }

  ngOnInit(): void {
    this.username1 = localStorage.getItem("UserID");
    this.cliniccode = localStorage.getItem("clinicCode");
    this.clinicname = localStorage.getItem("clinicName");
    this.getFloatBalance(this.cliniccode);
  }

}
