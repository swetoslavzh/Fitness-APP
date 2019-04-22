import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/core/services/workout.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  displayedColumns: Array<string> = ['name', 'date', 'buttons']
  historyData;

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.workoutService.getHistory()
      .subscribe((data) => {
        this.historyData = data['workouts'];
      })
  }

}
