import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {Employee} from "./employee";
import {SwitchboardService} from "./switchboard.service";
import {LoginComponent} from "./login/login.component";
import {User} from "./user";

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
  user: User;

  constructor(dataService: DataService, switchboard: SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
    this.user = this.data.currentUser;
    this.user.loggedin = false;
  }

  onSelect (newEmp: Employee): void {
    this.thisEmp = newEmp;
    this.switchboard.switchEmp(this.thisEmp);
  }



}
