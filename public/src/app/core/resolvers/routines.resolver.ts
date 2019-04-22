import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoutineService } from '../services/routine.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutinesResolver implements Resolve<any> {

  constructor(
    private routineService: RoutineService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return forkJoin([
      this.routineService.getUserRoutines(),
      this.routineService.getSampleRoutines()
    ])
    .pipe(map(result => {
      return {
        userRoutines: result[0],
        sampleRoutines: result[1]
      }
    }))
  }
}