import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-locum_expenses',
  templateUrl: './locum_expenses.component.html',
  styleUrls: ['./locum_expenses.component.css']
})
export class Locum_expensesComponent implements OnInit {

  locumexpenses: FormGroup;
  listdata: any;
  constructor(private fb: FormBuilder) {

    this.listdata = [];
    this.locumexpenses = this.fb.group({
      docname: ['', Validators.required],
      icnumber: ['', Validators.required],
      totalpayment: ['', Validators.required],
      remark: ['', Validators.required],
    })
  }

  public addLocum(): void {
    this.listdata.push(this.locumexpenses.value);
    this.locumexpenses.reset();
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
