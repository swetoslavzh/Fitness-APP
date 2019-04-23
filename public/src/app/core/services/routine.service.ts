import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const token = localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private userRoutineUrl = "http://localhost:5000/user";

  constructor(
    private http: HttpClient
  ) { }

  getUserRoutines() {
    return this.http.post(`${this.userRoutineUrl}/getRoutine`, { token });
  }

  getSampleRoutines() {
    return this.http.get(`http://localhost:5000/sampleRoutines`);
  }

  editRoutine(routineId: string) {
    return this.http.post('http://localhost:5000/editRoutine', { routineId });
  }

  addRoutine(name: string, routine, currentUrl: string) {
    let urlEnd = currentUrl.split('/').pop();
    let url = (urlEnd === "addRoutine") 
      ? `${this.userRoutineUrl}/addRoutine` 
      : "http://localhost:5000/sampleRoutines";

    return this.http.post(url, { name, routine, token })
  }
}
