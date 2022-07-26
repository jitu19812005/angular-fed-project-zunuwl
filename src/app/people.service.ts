import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { People } from './People';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private employeesUrl = './employees';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<People[]> {
    return this.http.get<People[]>(this.employeesUrl);
  }
  getEmployee(id: number): Observable<People> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<People>(url);
  }
  addEmployee(employee: People): Observable<People> {
    return this.http.post<People>(
      this.employeesUrl,
      employee,
      this.httpOptions
    );
  }
  updateEmployee(employee: People): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions);
  }
  deleteEmployee(employee: People | number): Observable<People> {
    const id = employee;
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete<People>(url, this.httpOptions);
  }
}
