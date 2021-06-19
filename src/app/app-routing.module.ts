import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { BACKEND_LAYOUT } from './routes/backend-layout-routes';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';
import { TrackingLayoutComponent } from './layouts/tracking-layout/tracking-layout.component';
import { TRACKING_LAYOUT } from './routes/tracking-layout-routes';
import { EnvironmentalTrackingLayoutComponent } from './layouts/environmental-tracking-layout/environmental-tracking-layout.component'
import { Environmental_TRACKING_LAYOUT } from './routes/environmental-tracking-layout-routes';


const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: DEFAULT_ROUTES },
  { path: 'backend', component: BackendLayoutComponent, children: BACKEND_LAYOUT },
  { path: 'tracking', component: TrackingLayoutComponent, children: TRACKING_LAYOUT },
  { path: 'environmental-tracking', component: EnvironmentalTrackingLayoutComponent, children: Environmental_TRACKING_LAYOUT },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
