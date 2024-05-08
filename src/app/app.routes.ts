import { Routes } from '@angular/router';
import { LoginComponent, PasswordRecoveryComponent, RegisterComponent } from './auth';
import { BoardsComponent, HighlightsComponent } from './dashboard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
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
    {
        path: 'dashboard', redirectTo: 'dashboard/boards', pathMatch: 'full'
    },
    { 
        path: 'boards', component: BoardsComponent 
    },
    { 
        path: 'highlights', component: HighlightsComponent 
    }
];
