import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {DataService} from "../data.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  emp: Employee;
  data: DataService;

  constructor(data: DataService) {
    this.data = data;
    this.emp = new Employee();
  }

  ngOnInit() {
  }

  public submitForm(emp: Employee){
    emp.departmentID = 1;
    console.log("SENDING:" , emp);
    this.data.doEmployee(emp);
    alert("Employee added. 🤡");
  }
}
