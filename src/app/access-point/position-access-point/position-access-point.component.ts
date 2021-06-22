import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ActivatedRoute, Router } from '@angular/router';
import { accessPointService } from '../services/access-point.service';

@Component({
  selector: 'app-position-access-point',
  templateUrl: './position-access-point.component.html',
  styleUrls: ['./position-access-point.component.scss']
})
export class PositionAccessPointComponent implements OnInit {
  private map;
  private accessPointId: number;
  private position = {
    Lat: 40.912145171922575,
    Lng: 1.0712748621690074
  };
  
  
  constructor(
    private accessPointService: accessPointService,
    private route: ActivatedRoute,
    private router: Router) { }

  
    ngOnInit(): void {
    this.accessPointId = +this.route.snapshot.paramMap.get('id');
    if(this.accessPointId){
      localStorage.setItem('accessPointId', JSON.stringify(this.accessPointId));
      this.accessPointService.getaccessPoint(this.accessPointId).subscribe(
        result => {
          localStorage.setItem('accessPoint', JSON.stringify(result)); 
          
        }
      )
      this.initMap();
      
    }
    else{
      alert("You can't update the Router Location")
    }
    
    
    
  } 

  

  private initMap() {

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
      draggable: true
    });

    marker.on('dragend', function(event) {
      
      marker.bindPopup("<b>Location:</b> " + marker.getLatLng().lat + ", " + marker.getLatLng().lng+ 
      "</br><b>By: Mubashar ahmed</b> ").openPopup();
      initAccessPoint(marker.getLatLng().lat,marker.getLatLng().lng);
      
      
      
    });
    
    marker.addTo(this.map);

    
    
  }

  



}


  

  



function initAccessPoint(lat: number, lng: number) {
  var model:any  = JSON.parse(localStorage.getItem('accessPoint'));
  console.log(model);
  alert(model.data.location);
}

