import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Employee} from "./employee";

@Injectable()
export class SwitchboardService {

  constructor() { }

  private empWatcher = new Subject<Employee>();
  public emp$ = this.empWatcher.asObservable();

  public switchEmp(emp: Employee) {
    if (emp) {
      this.empWatcher.next(emp);
    }
  }
}
