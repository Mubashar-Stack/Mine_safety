import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [MapComponent, UserProfileComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class MapModule { }
