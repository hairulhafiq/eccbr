import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared/shared.service';
import { Userpost } from './../Classes/userpost';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectControl = new FormControl('', Validators.required);
  usernameControl = new FormControl('', Validators.required);
  passControl = new FormControl('', Validators.required);
  alert: boolean = false;
  clinic: any;
  clinicarr: any = [];
  username: any;
  cliniccode: any;
  clinicname: any;
  userlogin: Userpost;
  text1: any;
  selectedItem: string;
  Usernamecheck: any;

  constructor(private service: SharedService, private activeRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

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

  OnLogin(value1: any, value: any, value2: any) {
    // console.log(this.clinic[0])
    if (this.clinic != 'Error-Could not find user id.') {
      this.username = value1;
      this.cliniccode = value2;

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

          this.service.postloginuser(opost).subscribe(res => {
            if (res = 1) {
              alert("Success Login")
              this.router.navigate(['/main']);
            }
            else {
              alert("Login Failed")
              this.Usernamecheck = "Wrong Password";
              this.alert = true;
            }
          });
        }
      }
    }
    else {
      this.Usernamecheck = "Wrong Username";
      this.alert = true;
    }
  }

}
