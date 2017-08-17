import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {User} from "../user";
import {Observable} from "rxjs/Observable";
import {Employee} from "../employee";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  user: User;
  data: DataService;
  employees: Observable<Employee[]>;

  constructor(data: DataService) {
    this.data = data;
    this.user = this.data.currentUser;
    this.employees = this.data.getEmployees(1);
  }

  public onChange(){
    console.log("CHANGIN");
  }

}
