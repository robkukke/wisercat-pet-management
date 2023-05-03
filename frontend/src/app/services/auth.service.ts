import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.backendUrl + '/api/auth';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const url = this.baseUrl + '/login';
    const body = { username, password };
    return this.http.post(url, body);
  }

  logout() {
    const url = this.baseUrl + '/logout';
    return this.http.post(url, {});
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
