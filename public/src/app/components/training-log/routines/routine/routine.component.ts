import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoutineService } from 'src/app/core/services/routine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent {

  @Input('routines') public routines;
  @Input('type') public type;
  public panelOpenState: boolean = false;

  constructor(
    public authService: AuthService,
    private routineService: RoutineService,
    private router: Router
  ) { }

  public deleteWorkout(id): void {
    this.routineService.deleteRoutine(id)
      .subscribe((_data) => {
        this.router.navigate(['/home']);
      });
  }
}
