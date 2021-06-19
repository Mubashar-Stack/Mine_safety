import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WifiTagsRoutingModule } from './wifi-tags-routing.module';
import { AddWifiTagsComponent } from './add-wifi-tags/add-wifi-tags.component';
import { ListWifiTagsComponent } from './list-wifi-tags/list-wifi-tags.component';


@NgModule({
  declarations: [AddWifiTagsComponent, ListWifiTagsComponent],
  imports: [
    CommonModule,
    WifiTagsRoutingModule,
    ReactiveFormsModule
  ]
})
export class WifiTagsModule { }
