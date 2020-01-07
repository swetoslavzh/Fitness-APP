import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/core/services/workout.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'date', 'buttons']
  public historyData = [];

  constructor(private workoutService: WorkoutService) { }

  public ngOnInit(): void {
    this.workoutService.getHistory()
      .subscribe((data) => {
        this.historyData = data['data'];
      });
  }

  public deleteRecord(element): void {
    this.workoutService.deleteWorkout(element)
      .subscribe((_data) => {
        this.workoutService.getHistory()
          .subscribe((data) => {
            this.historyData = data['data'];
          });
      });
  }
}
