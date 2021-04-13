import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None

})
export class MainComponent implements OnInit {
  TodayDate = Date.now();
  NoOfWeek = 1;
  stopTab: number = 0;
  tabs = ['Shift 1'];
  selected = new FormControl(0);

  constructor() { }

  onChangeWoundHeal() {
    this.stopTab = 1;
  }

  // addTab() {


  //   if (this.stopTab == 1) {
  //     ($event.target as HTMLButtonElement).disabled = true;
  //     confirm("Patient is fully healed.");
  //   }
  //   else if (this.stopTab == 0) {
  //     this.NoOfWeek = this.NoOfWeek + 2;
  //     this.tabs.push('Week ' + this.NoOfWeek);
  //     confirm("Patient next Appointment will be in 2 weeks.");
  //   }

  // }

  ngOnInit() {
  }

}
