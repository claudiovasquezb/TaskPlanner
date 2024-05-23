import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private token = inject(TokenService);

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
}
