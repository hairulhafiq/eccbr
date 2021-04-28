import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily_sales',
  templateUrl: './daily_sales.component.html',
  styleUrls: ['./daily_sales.component.css']
})
export class Daily_salesComponent implements OnInit {
  TodayDate = Date.now();
  tabs = ['Shift 1'];
  selected = new FormControl(0);
  stopTab: number = 0;
  NoOfShift = 1;
  buttonclicked = false;
  // locumExpenses: FormGroup;

  onClosing() {
    this.stopTab = 1;
  }

  addTab() {
    if (this.stopTab == 1) {
      // ($event.target as HTMLButtonElement).disabled = true;
      this.buttonclicked = true;
    }
    else if (this.stopTab == 0) {
      this.NoOfShift = this.NoOfShift + 1;
      this.tabs.push('Shift ' + this.NoOfShift);
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
