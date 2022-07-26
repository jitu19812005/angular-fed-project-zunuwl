import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './People';
@Component({
  selector: 'people-list',
  templateUrl: 'people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  searchText: string;
  People: People[];
  constructor(private peopleService: PeopleService) {}
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.peopleService.getEmployees().subscribe((employees) => {
      this.People = employees;
    });
  }
}
