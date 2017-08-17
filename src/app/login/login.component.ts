import { Component } from '@angular/core';
import {User} from "../user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User;
  data: DataService;

  constructor(data: DataService) {
    this.data = data;
    this.user = this.data.currentUser;
  }

  onSubmit(user){
    this.user.priviledges = this.data.doLogin(user);
  }

}
