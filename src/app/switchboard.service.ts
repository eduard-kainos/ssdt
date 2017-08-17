import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Employee} from "./employee";
import {User} from "./user";

@Injectable()
export class SwitchboardService {

  constructor() { }

  private empWatcher = new Subject<Employee>();
  private usrWatcher = new Subject<User>();
  public emp$ = this.empWatcher.asObservable();
  public usr$ = this.usrWatcher.asObservable();

  public switchEmp(emp: Employee) {
    if (emp) {
      this.empWatcher.next(emp);
    }
  }

  public updateUser(usr: User) {
    if (usr) {
      this.usrWatcher.next(usr);
    }
  }

}
