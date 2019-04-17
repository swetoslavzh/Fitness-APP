import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private url = "http://localhost:5000/user/";

  constructor(
    private http: HttpClient
  ) { }

  getMyRoutines() {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}getRoutine`, { token });
  }
}
