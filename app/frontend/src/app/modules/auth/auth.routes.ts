import { Routes } from '@angular/router';
import { LoginComponent, RegisterComponent, PasswordRecoveryComponent } from './pages';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    { 
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'register', component: RegisterComponent 
    },
    { 
        path: 'password-recovery', component: PasswordRecoveryComponent 
    },
]