import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = '/api/v1/auth';
  constructor(private readonly http: HttpClient) {}

  IsloggedIn() {
    return !!localStorage.getItem('token_flashboo');
  }

  refresh() {
    if (this.IsloggedIn()) {
      const token = localStorage.getItem('token_flashboo');
      return this.http.get(
        `${environment.URL}${this.path}/refresh?token=${token}`
      );
    }

    return null;
  }
}
