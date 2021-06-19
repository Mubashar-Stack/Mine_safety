import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapImportRoutingModule } from './map-import-routing.module';
import { MapListComponent } from './map-list/map-list.component';
import { MapAddComponent } from './map-add/map-add.component';


@NgModule({
  declarations: [MapListComponent, MapAddComponent],
  imports: [
    CommonModule,
    MapImportRoutingModule
  ]
})
export class MapImportModule { }
