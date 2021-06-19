
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const TRACKING_LAYOUT: Routes = [
    {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapModule),
        canLoad: [AuthGuard]
    }
]
