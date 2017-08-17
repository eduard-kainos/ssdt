import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./employee";
import {User} from "./user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {

  public currentUser:User;

  constructor(private http: HttpClient) {
    this.currentUser = new User();
    this.currentUser.username = "";
    this.currentUser.password = "";
  }

  public getEmployees(departmentID){
    const body = {
      "departmentID": departmentID
    };
    return this.http.post<Employee[]>('/api/emps', body);
  }

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


  public doEmployee(employee){
    const body = {
      "name": employee.name,
      "departmentID": employee.departmentID,
      "address": employee.address,
      "nin": employee.nin,
      "bankNumber": employee.banknumber,
      "startingSalary": employee.startingSalary
    };
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    this.http.post("/api/new", body, options).subscribe(data => {
      console.log("EMPLOYEE ADDED");
    });
  }

}
