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
    this.user = this.data.defaultUser;
  }

  onSubmit(user){
    console.log("TRYING LOGIN WITH: ", user.username , user.password);
    var message = this.data.doLogin(user);
    console.log("RESULTS: ", message);
  }

}
