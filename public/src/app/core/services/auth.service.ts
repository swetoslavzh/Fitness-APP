import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authUrl = 'http://localhost:5000/auth/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  login(email: string, password: string) {
    return this.http.post(this.authUrl + 'login', { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.authUrl + 'register', { name, email, password });
  }

  getToken() { 
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
