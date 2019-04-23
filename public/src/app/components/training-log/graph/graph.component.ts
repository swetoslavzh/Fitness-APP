import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Validators, FormControl } from '@angular/forms';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { ExerciseName } from '../../shared/models/exerciseName.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  private label:string = "Overall";

  selected = new FormControl('overall', [Validators.required]);
  exerciseNames: Array<ExerciseName>;
  chartData = [];
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0, 51, 255, 0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.workoutService.getExercises()
      .subscribe((names) => {
        this.exerciseNames = names['data'];
      });
    this.workoutService.getHistory()
      .subscribe((workouts) => {
        this.chartData = workouts['data'].map(workout => workout.workoutOverallKg);
        let dateLabels = workouts['data'].map(workout => {
          let date = new Date(workout.date);
          let formatedDate = this.formatDate(date);

          return formatedDate;
        });

        this.lineChartData = [
          { data: this.chartData, label: this.label }
        ];
        this.lineChartLabels = dateLabels
      });
  }

  selectChange(value) {

    if (value !== "overall") {
      let newLabels = [];

      this.workoutService.getExerciseHistory(value)
        .subscribe((exerciseHistory) => {
          console.log(exerciseHistory);
          this.chartData = exerciseHistory['data'].map(exercise => exercise.overallKg);
          newLabels = exerciseHistory['data'].map(exercise => {
            let date = new Date(exercise.date);
            let formatedDate = this.formatDate(date);

            return formatedDate;
          })

          this.lineChartData = [
            { data: this.chartData, label: this.label }
          ];
          this.lineChartLabels = newLabels;
        });
    }
  }

  formatDate(date: Date): string {
    return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
}
