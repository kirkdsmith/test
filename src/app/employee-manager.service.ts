import { Injectable } from '@angular/core';
export class Employee{
  constructor(private _id:number, private _name: string){

  }
  get id():number{return this._id;}
  get name():string{return this._name;}

}
@Injectable()
export class EmployeeManagerService {
  emps:Array<Employee>;
  constructor() {
    this.emps=[new Employee(1,"Alice"),
    new Employee(2,"Zeke"),
    new Employee(3,"Monique")]
   }

   getAll():Array<Employee>{return this.emps;}
   getById(id:number){
     for(let e of this.emps){
       if(e.id==id)
          return e;
     }
     return null;
   }

}
