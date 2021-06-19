import { Component, OnInit } from '@angular/core';
import { DeviceAssociationService } from '../services/device-association.service';
import { deviceAssociation } from '../models/device-association';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-device-association',
  templateUrl: './list-device-association.component.html',
  styleUrls: ['./list-device-association.component.scss']
})
export class ListDeviceAssociationComponent implements OnInit {

  title: string;
  rows: deviceAssociation[] = [];
  constructor(private DeviceAssociationService: DeviceAssociationService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Device Association';
    this.getdeviceAssociations();
  }

  getdeviceAssociations() { 
    this.DeviceAssociationService.getdeviceAssociations().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deletedeviceAssociation(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.DeviceAssociationService.deletedeviceAssociation(id).subscribe(
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
