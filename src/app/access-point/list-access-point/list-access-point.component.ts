import { Component, OnInit } from '@angular/core';
import { accessPointService } from '../services/access-point.service';
import { accessPoint } from '../models/access-point';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-access-point',
  templateUrl: './list-access-point.component.html',
  styleUrls: ['./list-access-point.component.scss']
})
export class ListAccessPointComponent implements OnInit {
  title: string;
  rows: accessPoint[] = [];

  constructor(private employeeService: accessPointService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Access Points';
    this.getaccessPoints();
    
  }

  getaccessPoints() {
    this.employeeService.getaccessPoints().subscribe(
      result => {
        this.rows = result;
        console.log(this.rows);
      }
    )
  }

  deleteaccessPoint(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.employeeService.deleteaccessPoint(id).subscribe(
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
