import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

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
  NoOfShift = 1;

  constructor() { }

  onClosing($event: any) {
    this.stopTab = 1;
  }

  addTab($event: any) {

    if (this.stopTab == 1) {
      ($event.target as HTMLButtonElement).disabled = true;
    }
    else if (this.stopTab == 0) {
      this.NoOfShift = this.NoOfShift + 1;
      this.tabs.push('Shift ' + this.NoOfShift);
    }

  }

  ngOnInit() {
  }

}
