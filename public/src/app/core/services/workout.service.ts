import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutUrl = "http://localhost:5000/workout";

  constructor(
    private http: HttpClient
  ) { }

  addExercise(name, group) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.workoutUrl}/addExercise`, { token, name, group });
  }

  getExercises() {
    return this.http.get(`${this.workoutUrl}/exerciseNames`);
  }
}
