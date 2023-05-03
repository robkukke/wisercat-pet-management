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

  // Handle log in
  login(username: string, password: string) {
    const url = this.baseUrl + '/login';
    const body = { username, password };
    return this.http.post(url, body);
  }

  // Handle log out
  logout() {
    const url = this.baseUrl + '/logout';
    return this.http.post(url, {});
  }

  // Handle log in check
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
