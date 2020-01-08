import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Validators, FormControl } from '@angular/forms';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { ExerciseName } from 'src/app/shared/models/exerciseName.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  private label:string = "Overall";

  public selected = new FormControl('overall', [Validators.required]);
  public exerciseNames: ExerciseName[];
  public chartData = [];
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  public lineChartLegend = true;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0, 51, 255, 0.3)',
    },
  ];

  constructor(
    private workoutService: WorkoutService
  ) { }

  public ngOnInit(): void {
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

  public selectChange(value): void {
    if (value === "overall") return;

    let newLabels = [];

    this.workoutService.getExerciseHistory(value)
      .subscribe((exerciseHistory) => {
        this.chartData = exerciseHistory['data'].map(exercise => exercise.overallKg);
        newLabels = exerciseHistory['data'].map(exercise => {
          let date = new Date(exercise.date);
          let formatedDate = this.formatDate(date);

          return formatedDate;
        });

        this.lineChartData = [
          { data: this.chartData, label: this.label }
        ];
        this.lineChartLabels = newLabels;
      });
  }

  public formatDate(date: Date): string {
    return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
}
