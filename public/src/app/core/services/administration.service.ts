import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private readonly baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/getAllUsers`);
  }

  changeUserRole(userId: string, roles: Array<string>) {
    return this.http.put(`${this.baseUrl}/changeRole`, {userId, roles} );
  }
}