import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  expense: Expenses[] = [
    { value: '', viewValue: 'Common Wages' },
    { value: '', viewValue: 'Fomema Delivery Cost' },
    { value: '', viewValue: 'Compensation - Dr Incentive(PROCD)' },
    { value: '', viewValue: 'Electricity & Water' },
    { value: '', viewValue: 'Licence Fees' },
    { value: '', viewValue: 'Maintenance - Clinic' },
    { value: '', viewValue: 'Maintenance - Off/Off Equip' },
    { value: '', viewValue: 'Maintenance - Motor Vehicle' },
    { value: '', viewValue: 'Miscellaneous' },
    { value: '', viewValue: 'Postage & Courier Charges' },
    { value: '', viewValue: 'Printing & Stationeries' },
    { value: '', viewValue: 'Staff Amenities' },
    { value: '', viewValue: 'Travelling Expenses' },
    { value: '', viewValue: 'Telephone' },
    { value: '', viewValue: 'ECCBR-Suspense' },
  ];

  commonexpenses: FormGroup;
  listdata: any;
  constructor(private fb: FormBuilder) {

    this.listdata = [];
    this.commonexpenses = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      totalpayment: ['', Validators.required],
    })
  }

  addExpenses() {
    console.log(this.expense);
    this.listdata.push(this.commonexpenses.value);
    this.commonexpenses.reset();
  }

  removeItem(element: any) {
    this.listdata.forEach((value: any, index: any) => {
      if (value == element)
        this.listdata.splice
    });
  }

  ngOnInit() {
  }

}
