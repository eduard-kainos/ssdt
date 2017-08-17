import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  employees = this.http.get('/api/emps');

}
