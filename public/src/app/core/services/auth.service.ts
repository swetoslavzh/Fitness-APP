import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { apiUrls } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  public isAdmin() {
    return localStorage.getItem('isAdmin') === "true";
  }

  public getToken() { 
    return localStorage.getItem('token');
  }

  public login(user: User) {
    return this.http.post(apiUrls.login, { email: user.email, password: user.password });
  }

  public register(name: string, email: string, password: string) {
    return this.http.post(apiUrls.register, { name, email, password });
  }

  public setLocalData(data) {
    localStorage.setItem('token', data['token']);
    localStorage.setItem('name', data['user'].name);
    localStorage.setItem('isAdmin', data['user'].isAdmin);
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
