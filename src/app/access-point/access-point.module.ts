import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AccessPointRoutingModule } from './access-point-routing.module';
import { ListAccessPointComponent } from './list-access-point/list-access-point.component';
import { AddAccessPointComponent } from './add-access-point/add-access-point.component';
import { PositionAccessPointComponent } from './position-access-point/position-access-point.component';


@NgModule({
  declarations: [ListAccessPointComponent, AddAccessPointComponent, PositionAccessPointComponent],
  imports: [
    CommonModule,
    AccessPointRoutingModule,
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class AccessPointModule { }
