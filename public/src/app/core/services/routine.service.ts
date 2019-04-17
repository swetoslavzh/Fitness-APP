import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private userUrl = "http://localhost:5000/user";

  constructor(
    private http: HttpClient
  ) { }

  getMyRoutines() {
    return this.http.post(`${this.userUrl}/getRoutine`, { token });
  }

  getSampleRoutines() {
    return this.http.get(`${this.userUrl}/sampleRoutines`);
  }

  addRoutine(name: string, routine) {
    return this.http.post(`${this.userUrl}/addRoutine`, { name, routine, token })
  }
}
