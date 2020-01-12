import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutineService } from '../routines/routine.service';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.scss']
})
export class EditRoutineComponent implements OnInit, OnDestroy {
  public routine: any;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private routineService: RoutineService
  ) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.routineService.editRoutine(id)
      .subscribe((data) => {
        this.routine = data;
      })
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
