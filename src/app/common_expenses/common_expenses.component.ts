import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';

interface Expenses {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-common_expenses',
  templateUrl: './common_expenses.component.html',
  styleUrls: ['./common_expenses.component.css']
})
export class Common_expensesComponent implements OnInit {
  type = new FormControl('', Validators.required);
  payment = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);

  expense: any;
  selectedItem: string;
  commonexpenses: any;
  listdata: any = [];
  alert: boolean = false;
  success: string;
  status: string;
  col: string;
  value: any;
  total: number = 0;
  constructor(private fb: FormBuilder, private service: SharedService) {


  }


  findsum() {
    this.value = this.commonexpenses
    for (let j in this.value) {
      this.total = + this.value[j].totalpayment;
      console.log(this.total)
    }
  }

  addExpenses(val: any, val1: any, val2: any) {
    if (val != 0 && val1 != 0 && val2 != 0) {
      this.commonexpenses = {
        type: val,
        description: val1,
        totalpayment: val2
      }
      this.listdata.push(this.commonexpenses);
      this.findsum();
      this.col = "alert alert-success alert-dismissible fade show";
      this.status = "Success!";
      this.success = "Your data has been successfully entered."
      this.alert = true;
    }
    else {
      this.col = "alert alert-warning alert-dismissible fade show";
      this.status = "Warning!";
      this.success = "Your data failed to entered. Please fill all column."
      this.alert = true;
    }


    // this.commonexpenses.reset();
  }

  removeItem(element: any) {
    this.listdata.forEach((value: any, index: any) => {
      if (value == element)
        this.listdata.splice
    });
  }

  ngOnInit() {
    this.service.getPaymentType("paymenttype").subscribe(data => {
      this.expense = data;
    });
  }

}
