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

  constructor(private fb: FormBuilder, private service: SharedService) {


  }

  addExpenses(val: any, val1: any, val2: any) {
    this.commonexpenses = {
      type: val,
      description: val1,
      totalpayment: val2
    }
    this.listdata.push(this.commonexpenses);
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
