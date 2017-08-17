import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./employee";
import {User} from "./user";

@Injectable()
export class DataService {

  public currentUser:User;

  constructor(private http: HttpClient) {
    this.currentUser = new User();
    this.currentUser.username = "";
    this.currentUser.password = "";
  }

  employees = this.http.get('/api/emps');

  public doLogin(user){
    const body = {
      "username": user.username,
      "password": user.password
    };
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    var tst = "";
    this.http.post("/api/login", body, options).subscribe(data => {
      for (let priv in data) {
        tst = tst + "," + data[priv].privs.toString();
        user.loggedin = true;
      }
    });

    return tst;
  }
}
