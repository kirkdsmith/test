import { Component, OnInit } from '@angular/core';
import {Employee,EmployeeManagerService} from './employee-manager.service';
@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list Works!
    </p>
    <ul><li *ngFor='let e of emps'>{{e.name}}</li></ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  emps:Array<Employee>;
  constructor(private service:EmployeeManagerService) {
     this.emps=service.getAll();
   }

  ngOnInit() {
  }

}
