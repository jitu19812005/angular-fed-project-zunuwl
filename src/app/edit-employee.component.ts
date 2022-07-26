import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute } from '@angular/router';
import { People } from './People';
import { Router } from '@angular/router';
@Component({
  selector: 'edit-employee',
  templateUrl: 'edit-employee.component.html',
  styles: [
    `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}`,
  ],
})
export class EditEmployeeComponent {
  id: number;
  name: string;
  location: string;
  email: string;
  mobile: string;
  people: People;
  constructor(
    private employeeService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getEmployee();
  }
  getEmployee(): void {
    this.employeeService.getEmployee(this.id).subscribe((employee) => {
      this.people = employee;
      this.name = employee.name;
      this.location = employee.location;
      this.email = employee.email;
      this.mobile = employee.mobile;
    });
  }
  onUpdate(people: People): void {
    console.log(people.name);
    //this.employee.id=this.id;
    this.people.name = people.name;
    this.people.mobile = people.mobile;
    this.people.location = people.location;
    this.people.email = people.email;
    this.updateDetails();
  }
  updateDetails() {
    this.employeeService
      .updateEmployee(this.people)
      .subscribe((employee) => {});
    this.router.navigate(['/employees']);
  }
}
