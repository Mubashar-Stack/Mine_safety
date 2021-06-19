import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  title: string;
  rows: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Employees';
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deleteEmployee(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.rows = this.rows.filter(item => item.id != id)
          } else {
            alert('Some thingh went wrong!');
          }
        }
      )
    }
  }

}
