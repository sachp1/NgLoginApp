import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name:string=null;
  constructor(
    private empserv: EmployeeService
  ) { }

  ngOnInit(): void {
    this.name=JSON.parse(localStorage.getItem('currentUser')).firstname;
  }
  allEmp(){
    console.log(this.empserv.getEmployees());
  }
}
