import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';
import { User } from 'src/app/components/shared/models/user.model';
;

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private readonly baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAllUsers`);
  }

  public changeUserRole(userId: string, roles: string[]) {
    return this.http.put(`${this.baseUrl}/changeRole`, {userId, roles} );
  }
}