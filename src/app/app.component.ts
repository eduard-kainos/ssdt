import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {Employee} from "./employee";
import {SwitchboardService} from "./switchboard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spike test';

  data: DataService;
  thisEmp: Employee;
  switchboard: SwitchboardService;

  constructor(dataService: DataService, switchboard: SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect (newEmp: Employee): void {
    this.thisEmp = newEmp;
    this.switchboard.switchEmp(this.thisEmp);
  }

}
