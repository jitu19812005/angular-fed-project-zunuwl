import {Component} from '@angular/core';
import {EmployeeService} from './employee.service';
import { ActivatedRoute } from '@angular/router';
import {Employee} from './employee';
import {Router} from '@angular/router';
@Component({
  selector:'edit-employee',
  templateUrl:'edit-employee.component.html',
  styles: [ `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}` ]
  })
  export class EditEmployeeComponent{
     id:number;
      name:string;
    location:string;
    email:string;
    mobile:string;
    employee:Employee;
    constructor(private employeeService:EmployeeService,private route: ActivatedRoute,private router:Router){}
    ngOnInit(){
      this.id = this.route.snapshot.params['id'];
      this.getEmployee();
    }
    getEmployee():void{
      this.employeeService.getEmployee(this.id).subscribe(employee=>{
        this.employee=employee;
        this.name=employee.name;
        this.location=employee.location;
        this.email=employee.email;
        this.mobile=employee.mobile;
      });
    }
    onUpdate(employee:Employee):void{
      console.log(employee.name);
      //this.employee.id=this.id;
      this.employee.name=employee.name;
      this.employee.mobile=employee.mobile;
      this.employee.location=employee.location;
      this.employee.email=employee.email;
      this.updateDetails();
      
    }
    updateDetails(){
        this.employeeService.updateEmployee(this.employee).subscribe(employee=>{});
      this.router.navigate(["/employees"]);
    }
  }