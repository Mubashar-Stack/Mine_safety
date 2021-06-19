import { Component, OnInit,ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ROUTES } from '@angular/router';
import { AuthService } from 'src/app/auth/services/authservice.service';

@Component({
  selector: 'app-environmental-navbar',
  templateUrl: './environmental-navbar.component.html',
  styleUrls: ['./environmental-navbar.component.scss']
})
export class EnvironmentalNavbarComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router, private authService: AuthService) {
    this.location = location;
  }

  ngOnInit(): void {
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return '/environmental';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
