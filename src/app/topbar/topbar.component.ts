import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {User} from "../user";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  data: DataService;
  user: User;

  constructor(data: DataService) {
    this.data = data;
    this.user = this.data.currentUser;
  }

  ngOnInit() {
  }

  onLogout(user){
    user.loggedin = false;
    user.priviledges = "";
  }

}
