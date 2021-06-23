import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ActivatedRoute, Router } from '@angular/router';
import { accessPointService } from '../services/access-point.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-position-access-point',
  templateUrl: './position-access-point.component.html',
  styleUrls: ['./position-access-point.component.scss']
})
export class PositionAccessPointComponent implements OnInit {
  private map;
  private accessPointId: number;
  private latP: number;
  private lngP: number;
  private position = {
    Lat: 43.0749934482418,
    Lng: -98.94291319105722
  };
  
  
  constructor(
    private accessPointService: accessPointService,
    private route: ActivatedRoute,
    private router: Router) { }

  
    ngOnInit(): void {
    this.accessPointId = +this.route.snapshot.paramMap.get('id');
    
    this.route.queryParams
      .subscribe(params => {
        this.latP = params.lat;
        this.lngP = params.lng;
        if(this.latP){
          this.accessPointService.getaccessPoint(this.accessPointId).subscribe(
            result => {
              var model:any = result.data; 
              model.id = this.accessPointId;
              model.location = this.latP+','+this.lngP;
              
              this.accessPointService.updateaccessPoint(model).subscribe(
                result => {
                  console.log(result);
                  if ( ! result.error) {
                    this.router.navigateByUrl('/backend/access-point');
                  } else {
                    alert('Some thingh went wrong!');
                  }
                }
              )
              
              
            }
          )
          
        }
       
        
      }
    );
   
    if(this.accessPointId){
     
       this.map = L.map('map', {
      center: [ 51.505, 0],
      zoom: 3
    });


    const tiles = L.tileLayer('/assets/img/map/tiles/{z}/{x}/{y}.png', {
      maxZoom: 5,
      noWrap:true
      
    });

    tiles.addTo(this.map);
    const marker = L.marker([this.position.Lat,this.position.Lng],{
      draggable: true,
      
    });

    marker.on('dragend', function(event) {
      var lat = marker.getLatLng().lat;
      var lng = marker.getLatLng().lng;
      var popup =`<form role="form" id="form" enctype="multipart/form-data" class = "form-horizontal" >
              
              <div class="form-group">
                  <label class="control-label col-sm-5"><strong>Lat: </strong></label>
                  <input  type="text" id="lat" name="lat" value="${lat}" />
              </div>
              <div class="form-group">
                  <label class="control-label col-sm-5"><strong>Lng: </strong></label>
                  <input  type="text" id="lat" name="lng" value="${lng}" />
              </div>
              <div class="form-group">
                <div style="text-align:center;" class="col-xs-4"><button type="submit" value="submit" class="btn btn-primary trigger-submit">Submit</button></div>
              </div>
              </form>`;
      
      
      marker.bindPopup(popup).openPopup();

      
      
    });
   
    marker.addTo(this.map);
    }
    else{
      alert("You can't update the Router Location")
    }
    
    
    
  } 


  

  
  
}


  

  






