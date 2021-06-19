import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-position-access-point',
  templateUrl: './position-access-point.component.html',
  styleUrls: ['./position-access-point.component.scss']
})
export class PositionAccessPointComponent implements AfterViewInit {
  private map;
  private position = {
    Lat: 40.912145171922575,
    Lng: 1.0712748621690074
  };
  
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
      
      
    });
    
    marker.addTo(this.map);

    
    
  }

  constructor() { }

  ngAfterViewInit(): void {

    this.initMap();
    
    
  } 


  



}
