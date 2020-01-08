import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseName } from 'src/app/shared/models/exerciseName.model';
import { apiUrls } from 'src/app/shared/constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private token: string;

  constructor(
    private http: HttpClient,
    private authSerivce: AuthService
    ) {
      this.token = this.authSerivce.getToken();
    }

  public addExercise(exericse: ExerciseName) {
    return this.http.post(apiUrls.workoutExercise, { 
      token: this.token, 
      name: exericse.name, 
      group: exericse.group });
  }

  public getExercises() {
    return this.http.get(apiUrls.workoutExerciseNames);
  }

  public getRoutine(id: string) {
    return this.http.post(apiUrls.workoutGetRoutine, { id });
  }

  public postWorkout(name: string, workout) {
    return this.http.post(apiUrls.workoutPostWorkout, { name, workout, token: this.token })
  }

  public getHistory() {
    return this.http.post(apiUrls.workoutHistory, { token: this.token });
  }

  public getExerciseHistory(name: string) {
    return this.http.post(apiUrls.workoutExerciseHistory, { token: this.token, name });
  }

  public  getWorkout(id: string) {
    return this.http.post(apiUrls.workoutGetWorkout, { id });
  }

  public deleteWorkout(id: string) {
    return this.http.delete(`${apiUrls.workoutDeleteWorkout}/${id}`);
  }
}
