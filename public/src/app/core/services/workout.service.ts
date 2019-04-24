import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseName } from 'src/app/components/shared/models/exerciseName.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutUrl = "http://localhost:5000/workout";

  constructor(
    private http: HttpClient
  ) { }

  addExercise(exericse: ExerciseName) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.workoutUrl}/addExercise`, { token, name: exericse.name, group: exericse.group });
  }

  getExercises() {
    return this.http.get(`${this.workoutUrl}/exerciseNames`);
  }

  getRoutine(id: string) {
    return this.http.post(`${this.workoutUrl}/getRoutine`, { id });
  }

  postWorkout(name: string, workout) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.workoutUrl}/postWorkout`, { name, workout, token })
  }

  getHistory() {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.workoutUrl}/history`, { token });
  }

  getExerciseHistory(name: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.workoutUrl}/exerciseHistory`, { token, name });
  }

  getWorkout(id: string) {
    return this.http.post(`${this.workoutUrl}/getWorkout`, { id });
  }

  deleteWorkout(id: string) {
    return this.http.delete(`${this.workoutUrl}/deleteWorkout/${id}`);
  }
}
