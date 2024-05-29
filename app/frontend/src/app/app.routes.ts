import { Routes } from '@angular/router';
import { LoginComponent, PasswordRecoveryComponent, RegisterComponent } from './modules/auth';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'auth/login', pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'dashboard',
        //canActivate: [authGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.routes)
    }
];
