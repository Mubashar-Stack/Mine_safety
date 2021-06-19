
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const BACKEND_LAYOUT: Routes = [
    
    {
        path: 'employees',
        loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'vehicals',
        loadChildren: () => import('../vehicals/vehicals.module').then(m => m.VehicalsModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'assets',
        loadChildren: () => import('../assets/assets.module').then(m => m.AssetsModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'access-point',
        loadChildren: () => import('../access-point/access-point.module').then(m => m.AccessPointModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'wifi-tags',
        loadChildren: () => import('../wifi-tags/wifi-tags.module').then(m => m.WifiTagsModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'device-association',
        loadChildren: () => import('../device-association/device-association.module').then(m => m.DeviceAssociationModule),
        canLoad: [AuthGuard]
    }
]
