import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./employee";
import {User} from "./user";

@Injectable()
export class DataService {

  public defaultUser:User;

  constructor(private http: HttpClient) {
    this.defaultUser = new User();
    this.defaultUser.username = "";
    this.defaultUser.password = "";
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

    return this.http.post("/api/login", body, options).subscribe();
  }
}
