import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import {EnvironmentalMapComponent} from './environmental-map/environmental-map.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';


const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    {
      path: '',
      component: EnvironmentalMapComponent
    },
    {
      path: 'sensorDetail/:id',
      component: SensorDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironmentalRoutingModule { }
 