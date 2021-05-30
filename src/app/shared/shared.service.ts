import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userpost } from './../Classes/userpost';
import { Dailysales } from './../Classes/dailysales';
import { SharedDataService } from './../shared/sharedData.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:52055/api";
  readonly APIUrl2 = "http://localhost:3000/api/";
  readonly APIUrl1 = "http://eccbrapi.qualitas.com.my/api/";
  readonly APIUrl3 = "http://localhost:28116/api/";

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient, private data: SharedDataService) { }

  getuserdetails(val: any, val1: any, val2: any) {
    this.data.clinicname = val;
    this.data.cliniccode = val1;
    this.data.username = val2;
  }

  getUserslogin(val: any): Observable<any[]> {
    let params1 = new HttpParams().set('UserId', val);
    return this.http.get<any>(this.APIUrl1 + 'eccbr/GetLoginClinic', { params: params1 });
  }

  postloginuser(opost: Userpost) {
    return this.http.post(this.APIUrl3 + 'eccbr/PostCheckLogin', opost);
  }

  getFloat(val: any, val2: any): Observable<any> {
    let params1 = new HttpParams().set('TransDate', val).set('ClinicCode', val2);
    return this.http.get<any>(this.APIUrl3 + 'DailySales/GetOpeningBalance', { params: params1 })
  }

  getPaymentType(val: any): Observable<any> {
    let params1 = new HttpParams().set('CommonID', val);
    return this.http.get<any>(this.APIUrl3 + 'Common/GetCommonInfo', { params: params1 })
  }

  postDailySales(val: Dailysales) {
    // console.log('ok');
    return this.http.post(this.APIUrl3 + 'DailySales/PostSaveDailySales', val);
  }

  getDailySales(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/LocumExpenses');
  }

  addDailySales(val: any) {
    return this.http.post(this.APIUrl + '/LocumExpenses', val)
  }

  updateDailySales(val: any) {
    return this.http.put(this.APIUrl + '/LocumExpenses', val)
  }

  deleteDailySales(val: any) {
    return this.http.delete(this.APIUrl + '/LocumExpenses', val)
  }

  getLocumExpensesList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/LocumExpenses');
  }

  addLocumExpenses(val: any) {
    return this.http.post(this.APIUrl + '/LocumExpenses', val)
  }

  updateLocumExpenses(val: any) {
    return this.http.put(this.APIUrl + '/LocumExpenses', val)
  }

  deleteLocumExpenses(val: any) {
    return this.http.delete(this.APIUrl + '/LocumExpenses', val)
  }

  getBankInDetails() {
    return this.http.get<any>(this.APIUrl + '/DailySales/MoneyInSafe')
  }
}
