import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddAccessPointComponent } from './add-access-point/add-access-point.component';
import { ListAccessPointComponent } from './list-access-point/list-access-point.component';
import { PositionAccessPointComponent } from './position-access-point/position-access-point.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ListAccessPointComponent
      },
      {
        path: 'create',
        component: AddAccessPointComponent
      },
      {
        path: 'edit/:id',
        component: AddAccessPointComponent
      },
      {
        path: 'position/:id',
        component: PositionAccessPointComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessPointRoutingModule { }
