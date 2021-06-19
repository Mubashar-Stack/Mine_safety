import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicalsRoutingModule } from './vehicals-routing.module';
import { AddVehicalComponent } from './add-vehical/add-vehical.component';
import { VehicalListComponent } from './vehical-list/vehical-list.component';


@NgModule({
  declarations: [AddVehicalComponent, VehicalListComponent],
  imports: [
    CommonModule,
    VehicalsRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehicalsModule { }
