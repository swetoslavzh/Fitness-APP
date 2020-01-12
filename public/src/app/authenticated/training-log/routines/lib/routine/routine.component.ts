import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutineService } from '../../routine.service';
import { AuthService } from '../../../../../shared/services/auth.service';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnDestroy {
  @Input('routines') public routines: any;
  @Input('type') public type: string;
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
