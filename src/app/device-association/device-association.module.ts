import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DeviceAssociationRoutingModule } from './device-association-routing.module';
import { AddDeviceAssociationComponent } from './add-device-association/add-device-association.component';
import { ListDeviceAssociationComponent } from './list-device-association/list-device-association.component';


@NgModule({
  declarations: [AddDeviceAssociationComponent, ListDeviceAssociationComponent],
  imports: [
    CommonModule,
    DeviceAssociationRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class DeviceAssociationModule { }
