import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { EnvironmentalRoutingModule } from './environmental-routing.module';
import { EnvironmentalMapComponent } from './environmental-map/environmental-map.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';


@NgModule({
  declarations: [EnvironmentalMapComponent, SensorDetailComponent],
  imports: [
    CommonModule,
    EnvironmentalRoutingModule,
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class EnvironmentalModule { }
