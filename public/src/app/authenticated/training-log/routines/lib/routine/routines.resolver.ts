import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { RoutineService } from '../../routine.service';

@Injectable({
  providedIn: 'root'
})
export class RoutinesResolver implements Resolve<any> {

  constructor(private routineService: RoutineService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return forkJoin([
      this.routineService.getUserRoutines(),
      this.routineService.getSampleRoutines()
    ])
    .pipe(map(result => {
      return {
        userRoutines: result[0],
        sampleRoutines: result[1]
      }
    }));
  }
}