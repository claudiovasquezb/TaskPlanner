import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PasswordRecoveryComponent, RegisterComponent } from './components';

const routes: Routes = [
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
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
