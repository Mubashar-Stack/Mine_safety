import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, circleMarker ,icon} from 'leaflet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-environmental-map',
  templateUrl: './environmental-map.component.html',
  styleUrls: ['./environmental-map.component.scss']
})
export class EnvironmentalMapComponent implements OnInit {

  title: string;
  points = [{location: "50.15984089712172, -19.15175296079544"},{location: "42.16080615643948, -98.92326573645741"},{location: "69.98332033561569, -112.10137908045444"}]
  sensors = [{
    CO: {
      name: "1-CO",
      status: "Active",
      report: "0 PPM"
    },
   AIRFLOW: {
    name: "1-Airflow",
    status: "Active",
    report: "166.66 m3/s"
   },
   HUMIDITY: {
    name: "1-Humidity",
    status: "Active",
    report: "78.3 %"
   },
   NH3: {
    name: "1-NH3",
    status: "Active",
    report: "0 PPM"
  },
 NO2: {
  name: "1-NO2",
  status: "Active",
  report: "166.66 m3/s"
 },
 O2: {
  name: "1-O2",
  status: "Active",
  report: "78.3 %"
 },
 METH: {
  name: "1-Math",
  status: "Active",
  report: "0 PPM"
},
TEMP: {
name: "1-Temperature",
status: "Active",
report: "166.66 m3/s"
},

  }]
  map: Map;
  mapOptions: MapOptions;
  
  constructor(
    private router: Router) { }

  ngOnInit() {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(53.09874078437141, -65.05768582221826),
      zoom: 3,
      layers: [
        tileLayer(
          '/assets/img/map/tiles/{z}/{x}/{y}.png',
          {
            maxZoom: 5,
            noWrap:true
            
          })
      ],
    };
  }


  private addSampleMarker() {
    
        console.log(this.points);
        for (const c of this.points) {
          var temp = 0
          const lon = parseFloat( c.location.split(',')[0] );
          const lat = parseFloat( c.location.split(',')[1] );
          const marker = circleMarker([lon, lat],{ radius: 10})
          
         
        marker.bindPopup(this.makeCapitalPopup(this.sensors[temp]));
        marker.addTo(this.map);
        temp ++;
      }
      
    
    
  }
  
  makeCapitalPopup(data: any): string {
    return `` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/0' ><span style="color: green"> ● </span><strong>${data.CO.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/1' ><span style="color: green"> ● </span><strong>${data.AIRFLOW.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/2'><span style="color: green"> ● </span><strong>${data.HUMIDITY.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/3' ><span style="color: green"> ● </span><strong>${data.NH3.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/4' ><span style="color: green"> ● </span><strong>${data.NO2.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/5'><span style="color: green"> ● </span><strong>${data.O2.name}</strong></a></div>` + `<div><a  ><span style="color: green"> ● </span><strong>${data.CO.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/6' ><span style="color: green"> ● </span><strong>${data.METH.name}</strong></a></div>` +
      `<div><a href='/environmental-tracking/environmental-map/sensorDetail/7'><span style="color: green"> ● </span><strong>${data.TEMP.name}</strong></a></div>`
  }

  makeCapitalPopup1() {
    return `` +
      `<div><a href='/tracking/map/002' ><span style="color: green"> ● </span><strong>Hamza Abid</strong></a></div>` +
      `<div><a href='/tracking/map/002' ><span style="color: green"> ● </span><strong>Awais Ahmed</strong></a></div>`
  }

  


}
