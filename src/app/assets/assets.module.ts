import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';


@NgModule({
  declarations: [AssetsListComponent, AddAssetsComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AssetsModule { }
