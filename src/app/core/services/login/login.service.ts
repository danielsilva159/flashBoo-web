import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, shareReplay } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  path = '/api/v1/auth';
  constructor(private readonly http: HttpClient) {}

  login(body: any) {
    return this.http.post(`${environment.URL}${this.path}/login`, body);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token_flashboo');
  }
}
