import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private userRoutineUrl = "http://localhost:5000/user";

  constructor(
    private http: HttpClient
  ) { }

  getUserRoutines() {
    let token = localStorage.getItem('token');
    return this.http.post(`${this.userRoutineUrl}/getRoutine`, { token });
  }

  getSampleRoutines() {
    return this.http.get(`http://localhost:5000/sampleRoutines`);
  }

  editRoutine(routineId: string) {
    return this.http.post('http://localhost:5000/editRoutine', { routineId });
  }

  addRoutine(name: string, routine, currentUrl: string) {
    let token = localStorage.getItem('token');
    let urlEnd = currentUrl.split('/').pop();
    let url = (urlEnd === "addRoutine") 
      ? `${this.userRoutineUrl}/addRoutine` 
      : "http://localhost:5000/sampleRoutines";
      
    return this.http.post(url, { name, routine, token })
  }

  deleteRoutine(id: string) {
    return this.http.delete(`http://localhost:5000/deleteRoutine/${id}`);
  }
}
