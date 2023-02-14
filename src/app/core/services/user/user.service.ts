import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  path = '/api/v1/user';
  constructor(private http: HttpClient) {}

  createUser(body: any) {
    return this.http.post(`${environment.URL}${this.path}`, body);
  }
}
