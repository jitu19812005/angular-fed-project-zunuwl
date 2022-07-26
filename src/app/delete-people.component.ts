import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './People';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'delete-people',
  template: 'deleting...',
})
export class DeletePeopleComponent implements OnInit {
  id: number;
  people: People;
  constructor(
    private employeeService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.id;
    });
    this.deletePeople(this.id);
  }
  deletePeople(id): void {
    this.employeeService.deletePeople(this.id).subscribe((employee) => {
      this.router.navigate(['/employees']);
    });
  }
}
