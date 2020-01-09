import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'src/app/core/services/routine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.scss']
})
export class EditRoutineComponent implements OnInit, OnDestroy {
  public routine;
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
