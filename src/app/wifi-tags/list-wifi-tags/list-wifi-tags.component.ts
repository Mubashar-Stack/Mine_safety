import { Component, OnInit } from '@angular/core';
import { wifitagsService } from '../services/wifi-tags.service';
import { wifiTags } from '../models/wifi-tags';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-wifi-tags',
  templateUrl: './list-wifi-tags.component.html',
  styleUrls: ['./list-wifi-tags.component.scss']
})
export class ListWifiTagsComponent implements OnInit {

  title: string;
  rows: wifiTags[] = [];

  constructor(private wifitagsService: wifitagsService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Access Points';
    this.getwifiTagss();

  }

  convertIntoMac(mac) {
    return mac.toString( 16 ).match( /.{1,2}/g ).join( ':' );
  }

  getwifiTagss() {
    this.wifitagsService.getwifiTagss().subscribe(
      result => {
        this.rows = result;
        console.log(this.rows);
      }
    )
  }

  deletewifiTags(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.wifitagsService.deletewifiTags(id).subscribe(
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
