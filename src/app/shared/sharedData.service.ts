import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  username: any;
  cliniccode: any;
  clinicname: any;
  remark: string = "";
  buttonclicked: boolean;
  alertDiff: boolean;
  stopTab: number = 0;

  constructor() { }

}
