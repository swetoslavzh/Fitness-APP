import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { WorkoutService } from 'src/app/core/services/workout.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseNamesResolver implements Resolve<any> {

  constructor(private workoutService: WorkoutService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.workoutService.getExercises();
  }
}