import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute } from '@angular/router';
import { People } from './People';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'details.component.html',
})
export class PeopleDetailsComponent implements OnInit {
  id: number;
  constructor(
    private router: Router,
    private employeeService: PeopleService,
    private route: ActivatedRoute
  ) {}
  people: People;
  ngOnInit() {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.id;
    });
    this.getEmployee();
  }
  getEmployee(): void {
    this.employeeService.getEmployee(this.id).subscribe((People) => {
      this.people = People;
    });
  }
  go_back() {
    this.router.navigate(['/employees']);
  }
}
