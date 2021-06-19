
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.scss']
})
export class BackendHeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
