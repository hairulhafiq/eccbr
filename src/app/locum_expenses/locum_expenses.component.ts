import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddEditLocexpComponent } from "./add-edit-locexp/add-edit-locexp.component";

@Component({
  selector: 'app-locum_expenses',
  templateUrl: './locum_expenses.component.html',
  styleUrls: ['./locum_expenses.component.css']
})
export class Locum_expensesComponent implements OnInit {

  // locumexpenses: FormGroup;
  listdata: any;
  ModalTitle: string;
  ActivateAddEditExpLoc: boolean = false;
  exp: any;
  loc: any;
  locumexpenses: any = [];
  users: any
  total = 0;
  private value: any;
  data = 0

  constructor(private dialog: MatDialog, private service: SharedService) {

    // this.listdata = [];
    //   this.locumexpenses = this.fb.group({
    //     docname: ['', Validators.required],
    //     icnumber: ['', Validators.required],
    //     totalpayment: ['', Validators.required],
    //     remark: ['', Validators.required],
    //   })
  }

  refreshLocumExpenses() {
    this.service.getLocumExpensesList().subscribe(data => {
      this.locumexpenses = data;
      this.findsum(this.locumexpenses);
      console.log(data);
    });
  }

  findsum(data: any) {
    debugger
    this.value = data
    console.log(this.value);
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].LocumPayment
      console.log(this.total)
    }
  }

  closeClick() {
    this.ActivateAddEditExpLoc = false;
    this.refreshLocumExpenses();
  }
  // editClick(item){
  //   this.onCreate();
  //   this.
  // }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddEditLocexpComponent, dialogConfig);
  }

  addClick() {
    // this.exp{
    //   this.l
    // }
    this.ModalTitle = "Add Locum Expenses"
    this.ActivateAddEditExpLoc = true;
  }

  ngOnInit() {
    // this.refreshLocumExpenses();
  }

}
