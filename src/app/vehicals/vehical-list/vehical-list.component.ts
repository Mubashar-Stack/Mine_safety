import { Component, OnInit } from '@angular/core';
import { VehicalService } from '../services/vehical.service';
import { Vehical } from '../models/vehical';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vehical-list',
  templateUrl: './vehical-list.component.html',
  styleUrls: ['./vehical-list.component.scss']
})
export class VehicalListComponent implements OnInit {

  title: string;
  rows: Vehical[] = [];

  constructor(private vehicalService: VehicalService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Vehicals';
    this.getVehicals();
  }

  getVehicals() {
    this.vehicalService.getVehicals().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deleteVehical(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.vehicalService.deleteVehical(id).subscribe(
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
