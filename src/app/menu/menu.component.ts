import { Component, OnInit } from '@angular/core';
import {SwitchboardService} from "../switchboard.service";
import {User} from "../user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  user: User;

  constructor(data: DataService) {
    this.user = data.currentUser;
  }

  public addForm(){
    this.user.content = "addForm";
  }

  public showReport(){
    this.user.content = "showReport";
  }

}
