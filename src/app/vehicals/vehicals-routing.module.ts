import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { VehicalListComponent } from './vehical-list/vehical-list.component';
import { AddVehicalComponent } from './add-vehical/add-vehical.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: VehicalListComponent
      },
      {
        path: 'create',
        component: AddVehicalComponent
      },
      {
        path: 'edit/:id',
        component: AddVehicalComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicalsRoutingModule { }
