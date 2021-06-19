import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../services/assets.service';
import { Assets } from '../models/assets';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {
  title: string;
  rows: Assets[] = [];

  constructor(private vehicalService: AssetsService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Assets';
    this.getAssets();
  }

  getAssets() {
    this.vehicalService.getAssets().subscribe(
      result => {
        this.rows = result;
      }
    )
  }

  deleteAssets(id: number) {
    if(confirm('Are you sure want to delete?')) {
      this.vehicalService.deleteAssets(id).subscribe(
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
