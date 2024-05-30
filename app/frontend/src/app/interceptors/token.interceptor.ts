import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, switchMap, tap, map } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();

  if( token ) {
    req = req.clone({
      headers: req.headers.set('x-token', token)
    });
  }
  return next(req);
};