import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee";
import {User} from "./user";

@Injectable()
export class DataService {

  public defaultUser:User;

  constructor(private http: HttpClient) {
    this.defaultUser = new User();
    this.defaultUser.username = "username";
    this.defaultUser.password = "password";
  }

  employees = this.http.get('/api/emps');


}
