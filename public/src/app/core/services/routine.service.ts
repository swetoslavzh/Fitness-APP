import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

  private userRoutineUrl = "http://localhost:5000/user";

  constructor(private http: HttpClient) { }

  public getUserRoutines() {
    let token = localStorage.getItem('token');
    return this.http.post(`${this.userRoutineUrl}/getRoutine`, { token });
  }

  public getSampleRoutines() {
    return this.http.get(`http://localhost:5000/sampleRoutines`);
  }

  public editRoutine(routineId: string) {
    return this.http.post('http://localhost:5000/editRoutine', { routineId });
  }

  public addRoutine(name: string, routine, currentUrl: string) {
    const token = localStorage.getItem('token');
    const urlLastSegment = currentUrl.split('/').pop();
    let url = (urlLastSegment === "addRoutine") 
      ? `${this.userRoutineUrl}/addRoutine` 
      : "http://localhost:5000/sampleRoutines";
      
    return this.http.post(url, { name, routine, token })
  }

  public deleteRoutine(id: string) {
    return this.http.delete(`http://localhost:5000/deleteRoutine/${id}`);
  }
}
