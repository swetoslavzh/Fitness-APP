import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const token = localStorage.getItem('token');

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

  getWorkout(id: string) {
    return this.http.post(`${this.workoutUrl}/getWorkout`, { id });
  }

  postWorkout(name, workout) {
    return this.http.post(`${this.workoutUrl}/postWorkout`, { name, workout, token })
  }

  getHistory() {
    return this.http.post(`${this.workoutUrl}/history`, { token });
  }
}
