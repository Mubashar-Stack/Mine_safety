import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/backend/employees', title: 'Employees',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/backend/vehicals', title: 'Vehicals',  icon:'ni-planet text-blue', class: '' },
    { path: '/backend/assets', title: 'Assets',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Alarms',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/dashboard', title: 'Default View',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/map-import', title: 'Map Import',  icon:'ni-planet text-blue', class: '' },
    { path: '/assets', title: 'Zones',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'Levels',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/backend/device-association', title: 'Device Association',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/vehicals', title: 'Server Configration',  icon:'ni-planet text-blue', class: '' },
    { path: '/backend/access-point', title: 'WiFi Access Points',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/backend/wifi-tags', title: 'WiFi Tags/Devices',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/user-profile', title: 'Groups',  icon:'ni-single-02 text-yellow', class: '' }
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
