import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/shared.service';
import { FormControl, Validators } from '@angular/forms';
import { Userpost } from '../Classes/userpost';
import { SharedDataService } from './../shared/sharedData.service';

@Component({
  selector: 'app-Remark',
  templateUrl: './Remark.component.html',
  styleUrls: ['./Remark.component.css']
})
export class RemarkComponent implements OnInit {
  usernameControl = new FormControl('', Validators.required);
  passControl = new FormControl('', Validators.required);
  remarkControl = new FormControl('', Validators.required);
  selectControl = new FormControl('', Validators.required);

  alert: boolean = false;
  username: any;
  cliniccode: any;
  clinic: any;
  Usernamecheck: any;
  clinicname: any;
  userlogin: Userpost;
  selectedItem: string;
  remarkcolumn: string = "";

  constructor(public dialogRef: MatDialogRef<RemarkComponent>, private service: SharedService, private data: SharedDataService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  didModify(value: any) {
    this.service.getUserslogin(value).subscribe(
      data => {
        this.clinic = data
        if (this.clinic != "Error-Could not find user id.") {
          this.clinic = data
        }
        else {
          this.Usernamecheck = "Wrong Username";
          this.alert = true;
        }
      }
    );
  }

  OnLogin(value1: any, value: any, value2: any, value3: any) {

    if (this.clinic != 'Error-Could not find user id.') {
      this.username = value1;
      this.cliniccode = value2;
      this.remarkcolumn = value3;
      // this.clinicarr = this.clinic;
      for (var i in this.clinic) {
        // console.log(this.clinic[i].ECBCLU_CLINICCODE)
        if (this.clinic[i].ECBCLU_CLINICCODE === value2) {
          // console.log(this.clinic[i].CLINICNAME)
          this.clinicname = this.clinic[i].CLINICNAME;
          this.service.getuserdetails(this.clinicname, this.cliniccode, this.username);
          var opost = new Userpost;
          opost.UserId = value1;
          opost.Password = value;
          opost.ClinicCode = value2;

          if (this.remarkcolumn != "") {
            this.service.postloginuser(opost).subscribe(res => {
              if (res = 1) {
                this.data.buttonclicked = false;
                this.data.remark = this.remarkcolumn;
                this.data.alertDiff = true;
                this.dialogRef.close();
              }
              else {
                this.Usernamecheck = "Wrong Password";
                this.alert = true;
              }
            });
          }
          else {
            this.Usernamecheck = "Please Enter Remark of cash difference";
            this.alert = true;
          }
        }
      }
    }
    else {
      this.Usernamecheck = "Wrong Username";
      this.alert = true;
    }
  }

}
