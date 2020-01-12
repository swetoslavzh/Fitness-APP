import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { apiUrls } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrls.getAllUsers);
  }

  public changeUserRole(userId: string, roles: string[]): Observable<any> {
    return this.http.put(apiUrls.changeUserRole, {userId, roles} );
  }
}