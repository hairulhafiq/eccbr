import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Userpost } from './../Classes/userpost';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectControl = new FormControl('', Validators.required);
  usernameControl = new FormControl('', Validators.required);
  passControl = new FormControl('', Validators.required);

  clinic: any = [];
  userlogin: Userpost[];
  text1: any;
  selectedItem: string;

  constructor(private service: SharedService) { }

  ngOnInit(): void {

  }

  didModify(value: any) {
    this.service.getUserslogin(value).subscribe(data => {
      this.clinic = data;
    });
  }

  OnLogin(value1: any, value: any, value2: any) {

    var opost = new Userpost();
    opost.UserId = value1;
    opost.Password = value;
    opost.ClinicCode = value2;
    console.log(opost);

    this.service.postloginuser(opost).subscribe(data => {
      this.text1 = data;
      console.log(this.text1)
    });
    // this.service.getUserslogin(value1).subscribe(data => {
    //   this.clinic = data;
    //   if (this.clinic[0].ECBCLU_USERID = value1) {
    //     console.log(this.clinic[0].ECBCLU_USERID);
    //   }
    // });

  }

}
