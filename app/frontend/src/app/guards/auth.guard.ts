import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const routerService = inject(Router);

  const token = tokenService.getToken();

  if(!token) {
    return routerService.createUrlTree(['/auth/login']);
  }
  
  return true;
};

