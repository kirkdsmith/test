/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {Employee, EmployeeManagerService } from './employee-manager.service';

describe('EmployeeManagerService', () => {
   const INVALID_ID:number=-22;
   const VALID_ID:number=2;
   let emp:Employee=null;

   beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [EmployeeManagerService]
     });
   });
  
  it('EmployeeManagerService is created', inject([EmployeeManagerService], (service: EmployeeManagerService) => {
    expect(service).toBeTruthy();
  }));

    it('getAll returns an array of employees', inject([EmployeeManagerService], (service: EmployeeManagerService) => {
      expect(service.getAll().length).toBeGreaterThanOrEqual(3);
    }));

    it('getById(INVALID_ID) returns null', inject([EmployeeManagerService], (service: EmployeeManagerService) => {
      expect(service.getById(this.INVALID_ID)).toBeNull();
    }));

    it('getById(VALID_ID) returns corret employee', inject([EmployeeManagerService], (service: EmployeeManagerService) => {
      emp=service.getById(VALID_ID);
      expect(emp).toBeTruthy;
      expect(emp.id).toEqual(VALID_ID);
    }));
   
});
