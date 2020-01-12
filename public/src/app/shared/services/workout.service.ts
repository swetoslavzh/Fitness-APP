import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ExerciseName } from '../models/exerciseName.model';
import { apiUrls } from '../constants';
import { Observable } from 'rxjs';

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

  public addExercise(exericse: ExerciseName): Observable<any> {
    return this.http.post(apiUrls.workoutExercise, { 
      token: this.token, 
      name: exericse.name, 
      group: exericse.group });
  }

  public getExercises(): Observable<any> {
    return this.http.get(apiUrls.workoutExerciseNames);
  }

  public getRoutine(id: string): Observable<any> {
    return this.http.post(apiUrls.workoutGetRoutine, { id });
  }

  public postWorkout(name: string, workout): Observable<any> {
    return this.http.post(apiUrls.workoutPostWorkout, { name, workout, token: this.token })
  }

  public getHistory(): Observable<any> {
    return this.http.post(apiUrls.workoutHistory, { token: this.token });
  }

  public getExerciseHistory(name: string): Observable<any> {
    return this.http.post(apiUrls.workoutExerciseHistory, { token: this.token, name });
  }

  public getWorkout(id: string): Observable<any> {
    return this.http.post(apiUrls.workoutGetWorkout, { id });
  }

  public deleteWorkout(id: string): Observable<any> {
    return this.http.delete(`${apiUrls.workoutDeleteWorkout}/${id}`);
  }
}
