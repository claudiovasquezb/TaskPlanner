import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private http = inject(HttpClient);
  private token = inject(TokenService);

  public getBoards(): Observable<any> {
    const url = `${environment.API_URL}/boards`;
    return this.http.get(url);
  }

  public getBoardsList(id: string): Observable<any> {
    const url = `${environment.API_URL}/boards/list/${id}`;
    return this.http.get(url);
  }
}
