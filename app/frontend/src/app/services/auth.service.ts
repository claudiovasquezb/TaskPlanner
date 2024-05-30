import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { LoginResponse } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private token = inject(TokenService);
  private routerService = inject(Router);

  private authState$ = new Observable();


  public login(email: string, password: string): Observable<any> {
    const url = `${environment.API_URL}/auth/`;
    return this.http.post<LoginResponse>(url, { email, password })
    .pipe(
      map(({uid, name, token } : any) =>{
        if(token) {
          this.token.saveToken(token);
        }
        return {
          uid, 
          name, 
          token
        };
      })
    )
  }

  public logout() {
    this.token.clearToken();
  }

  public renewToken(): Observable<any> {
    const url = `${environment.API_URL}/auth/renew`;
    return this.http.get<RenewResponse>(url).pipe(
      tap((data) => {
        console.log(data);
        this.token.saveToken(data.token);
      }),
      catchError((error) => {
        console.error('Error renewing token:', error);
        this.token.clearToken();
        this.routerService.navigateByUrl('/auth/login');
        return throwError(() => error)
      })
    )
  }

}


export interface RenewResponse {
  token: string
  uid: string,
  name: string
}