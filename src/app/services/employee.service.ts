import { Injectable } from '@angular/core';
import { Employee } from "../employee";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  emps:Employee[] = [{"username":"sachin","password":"pass", "email":"ma@il","gender":"male","hobbies":["Music"],"firstname":"sachin","lastname":"prakash"}];
  constructor() { }

  getEmployees(): Employee[]{
    return this.emps;
  }
  setEmployee(emp){
    this.emps.push(emp);
  }
}
