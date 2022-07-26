import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  employees: Employee[] = [];
  constructor(private employeeService:EmployeeService){}
  ngOnInit(){
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}