import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/components/shared/models/user.model';

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

  isAdmin() {
    return localStorage.getItem('isAdmin') === "true";
  }

  login(user: User) {
    return this.http.post(this.authUrl + 'login', { email: user.email, password: user.password });
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
