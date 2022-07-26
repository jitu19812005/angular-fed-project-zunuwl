import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './People';
import { Router } from '@angular/router';
@Component({
  selector: 'add-people',
  templateUrl: 'add-people.component.html',
  styles: [
    `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}`,
  ],
})
export class AddPeopleComponent {
  employees: People[] = [];
  constructor(private employeeService: PeopleService, private router: Router) {}
  onSubmit(employee): void {
    this.employeeService
      .addEmployee(employee as People)
      .subscribe((employee) => {
        this.employees.push(employee);
      });
    this.router.navigate(['/employees']);
  }
}
