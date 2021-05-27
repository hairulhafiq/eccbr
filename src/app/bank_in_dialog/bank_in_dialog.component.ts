import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/shared.service';
import { Submit_bank_slipComponent } from "./submit_bank_slip/submit_bank_slip.component";

@Component({
  selector: 'app-bank_in_dialog',
  templateUrl: './bank_in_dialog.component.html',
  styleUrls: ['./bank_in_dialog.component.css']
})
export class Bank_in_dialogComponent implements OnInit {
  MoneyInsafe: any = [];
  total = 0;
  private value: any;
  data = 0

  constructor(public dialogRef: MatDialogRef<Bank_in_dialogComponent>, private dialog: MatDialog, private service: SharedService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  refreshBankInDetails() {
    this.service.getBankInDetails().subscribe(data => {
      this.MoneyInsafe = data;
      this.findsum(this.MoneyInsafe);
    });
  }

  findsum(data: any) {
    this.value = data
    console.log(this.value);
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].DailySalesCash
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(Submit_bank_slipComponent, dialogConfig);
  }

  ngOnInit() {
    this.refreshBankInDetails();
  }

}
