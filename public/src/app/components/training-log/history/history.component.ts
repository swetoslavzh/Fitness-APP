import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['name', 'date', 'buttons']
  public historyData: any[];
  private subscriptions: Subscription[];

  constructor(private workoutService: WorkoutService) {
    this.historyData = [];
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.subscriptions.push( this.workoutService.getHistory()
      .subscribe((data) => {
        this.historyData = data['data'];
      }) );
  }

  public deleteRecord(element): void {
    this.subscriptions.push( this.workoutService.deleteWorkout(element)
      .subscribe((_data) => {
        this.subscriptions.push( this.workoutService.getHistory()
          .subscribe((data) => {
            this.historyData = data['data'];
          }) );
      }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
