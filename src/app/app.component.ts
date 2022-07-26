import { Component, OnInit } from '@angular/core';
import {People} from './People';
import {PeopleService} from './people.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  employees: People[] = [];
  constructor(private employeeService:PeopleService){}
  ngOnInit(){
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}