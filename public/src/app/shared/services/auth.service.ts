import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import { User } from '../models/user.model';
import { apiUrls } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public isAdmin(): boolean{
    return localStorage.getItem('isAdmin') === "true";
  }

  public getToken(): string { 
    return localStorage.getItem('token');
  }

  public login(user: User): Observable<any>{
    return this.http.post(apiUrls.login, { email: user.email, password: user.password });
  }

  public register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(apiUrls.register, { name, email, password });
  }

  public setLocalData(data): void {
    localStorage.setItem('token', data['token']);
    localStorage.setItem('name', data['user'].name);
    localStorage.setItem('isAdmin', data['user'].isAdmin);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
