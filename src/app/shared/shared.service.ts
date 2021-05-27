import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userpost } from './../Classes/userpost';
import { Dailysales } from './../Classes/dailysales';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:52055/api";
  readonly APIUrl1 = "http://eccbrapi.qualitas.com.my/api/";

  constructor(private http: HttpClient) { }

  getUserslogin(val: any): Observable<any[]> {
    let params1 = new HttpParams().set('UserId', val);
    return this.http.get<any>(this.APIUrl1 + 'eccbr/GetLoginClinic', { params: params1 });
  }

  postloginuser(opost: Userpost) {
    return this.http.post(this.APIUrl1 + 'eccbr/PostCheckLogin', opost);
  }

  postDailySales(val: Dailysales) {
    return this.http.post(this.APIUrl1 + 'DailySales/PostSaveDailySales', val);
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
