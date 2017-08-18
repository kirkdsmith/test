import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {EmployeeManagerService,Employee} from './employee-manager.service';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
