import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AddWifiTagsComponent } from './add-wifi-tags/add-wifi-tags.component';
import { ListWifiTagsComponent } from './list-wifi-tags/list-wifi-tags.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ListWifiTagsComponent
      },
      {
        path: 'create',
        component: AddWifiTagsComponent
      },
      {
        path: 'edit/:id',
        component: AddWifiTagsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WifiTagsRoutingModule { }
