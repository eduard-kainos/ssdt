import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import {SwitchboardService} from "./switchboard.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [
    DataService,
    SwitchboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
