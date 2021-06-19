import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import { NodemarkerService } from '../services/nodemarker.service';
import { accessPoint } from '../models/access-points';
import { Router } from '@angular/router';
import { ActivedevicesService } from '../services/activedevices.service';
import { activeDevice } from '../models/active-devices';
import { deviceAssociation } from '../../device-association/models/device-association';
import {DeviceAssociationService} from '../../device-association/services/device-association.service';
import { EmployeeService } from '../../employees/services/employee.service';
import { Employee } from '../../employees/models/employee'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title: string;
  rows: accessPoint[] = [];
  actDvc: activeDevice[] = [];
  deviceAsso:deviceAssociation[] = [];
  emp: Employee[] = [];

  map: Map;
  mapOptions: MapOptions;
  
  constructor(private markerService: NodemarkerService,
    private activeDService: ActivedevicesService,
    private deviceAssoService: DeviceAssociationService,
    private empService: EmployeeService,
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
    

    this.markerService.getaccessPoints().subscribe(
      result => {
        this.rows = result;
        console.log(this.rows);
        for (const c of this.rows) {
          const lon = parseFloat( c.location.split(',')[0] );
          const lat = parseFloat( c.location.split(',')[1] );
          const marker = new Marker([lon, lat],)
          .setIcon(
          icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
        this.activeDService.getactiveDevices().subscribe(
          result => {
            this.actDvc = result;
            for ( const ad of this.actDvc){
              const tagid = ad.tag_id;
              this.deviceAssoService.getempdeviceAssociation(tagid).subscribe(
                result => {
                  var temp = result;
                  this.empService.getEmployee(temp.data.employee_id).subscribe(
                    result => {
                      var emp = result;
                      
                      
                      marker.bindPopup(this.makeCapitalPopup(emp.data));
                    }
                  )
                }
              )
              
            }
          }
        )
        marker.bindPopup(this.makeCapitalPopup1());
        marker.addTo(this.map);
      }
    }
    )
      
    
    
  }
  
  makeCapitalPopup(data: any): string {
    return `` +
      `<div><a href='/tracking/map/userProfile/${data.id}' ><span style="color: green"> ● </span><strong>${ data.firstname } ${data.lastname}</strong></a></div>` +
      `<div><a href='/tracking/map/userProfile/6' ><span style="color: green"> ● </span><strong>Awais Ahmed</strong></a></div>`
  }

  makeCapitalPopup1() {
    return `` +
      `<div><a href='/tracking/map/userProfile/6' ><span style="color: green"> ● </span><strong>Awais Ahmed</strong></a></div>`
  }

  




}