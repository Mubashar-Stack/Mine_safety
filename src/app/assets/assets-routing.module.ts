import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: AssetsListComponent
      },
      {
        path: 'create',
        component: AddAssetsComponent
      },
      {
        path: 'edit/:id',
        component: AddAssetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
