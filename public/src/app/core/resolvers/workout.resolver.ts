import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { WorkoutService } from '../services/workout.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutResolver implements Resolve<any> {

  constructor(
    private workoutService: WorkoutService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.workoutService.getRoutine(id);
  }
}