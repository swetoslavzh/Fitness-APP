import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkoutService } from '../../../shared/services/workout.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  public displayedColumns: string[];
  public historyData: any[];
  private subscriptions: Subscription[];

  constructor(private workoutService: WorkoutService) {
    this.displayedColumns = ['name', 'date', 'buttons'];
    this.historyData = [];
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.workoutService.getHistory()
      .subscribe((data) => {
        this.historyData = data['data'];
      }));
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
