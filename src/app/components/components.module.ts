import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { TrackingSidebarComponent } from './tracking-sidebar/tracking-sidebar.component';
import { TrackingNavbarComponent } from './tracking-navbar/tracking-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentalNavbarComponent } from './environmental-navbar/environmental-navbar.component';
import { EnvironmentalSidebarComponent } from './environmental-sidebar/environmental-sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TrackingSidebarComponent,
    TrackingNavbarComponent,
    EnvironmentalNavbarComponent,
    EnvironmentalSidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TrackingNavbarComponent,
    TrackingSidebarComponent,
    EnvironmentalNavbarComponent,
    EnvironmentalSidebarComponent
  ]
})
export class ComponentsModule { }
