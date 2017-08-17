import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import {SwitchboardService} from "./switchboard.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    SwitchboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
