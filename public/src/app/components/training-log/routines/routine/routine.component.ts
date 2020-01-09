import { Component, Input, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoutineService } from 'src/app/core/services/routine.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnDestroy {
  @Input('routines') public routines;
  @Input('type') public type;
  public panelOpenState: boolean = false;
  private subscription: Subscription;

  constructor(
    public authService: AuthService,
    private routineService: RoutineService,
    private router: Router
  ) { }

  public deleteWorkout(id): void {
    this.subscription = this.routineService.deleteRoutine(id)
      .subscribe((_data) => {
        this.router.navigate(['/home']);
      });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
