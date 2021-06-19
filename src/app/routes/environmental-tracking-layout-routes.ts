
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const Environmental_TRACKING_LAYOUT: Routes = [
    {
        path: 'environmental-map',
        loadChildren: () => import('../environmental/environmental.module').then(m => m.EnvironmentalModule),
        canLoad: [AuthGuard]
    }
]
