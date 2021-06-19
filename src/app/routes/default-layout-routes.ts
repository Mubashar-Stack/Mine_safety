
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../cms/cms.module').then(m => m.CmsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard]
    }
]
