import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddDeviceAssociationComponent } from './add-device-association/add-device-association.component';
import { ListDeviceAssociationComponent } from './list-device-association/list-device-association.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ListDeviceAssociationComponent
      },
      {
        path: 'create',
        component: AddDeviceAssociationComponent
      },
      {
        path: 'edit/:id',
        component: AddDeviceAssociationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceAssociationRoutingModule { }
