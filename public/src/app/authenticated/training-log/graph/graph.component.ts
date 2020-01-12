import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExerciseName } from '../../../shared/models/exerciseName.model';
import { WorkoutService } from '../../../shared/services/workout.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy {
  public label: string;
  public selected: FormControl;
  public exerciseNames: ExerciseName[];
  public chartData: [];
  public lineChartPlugins: [];
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartType: ChartType;
  public lineChartLegend: boolean;
  public lineChartOptions: ChartOptions;
  public lineChartColors: Color[];
  private subscriptions: Subscription[];
  
  constructor(
    private workoutService: WorkoutService
  ) {
    this.label = "Overall";
    this.selected = new FormControl('overall', [Validators.required]);
    this.subscriptions = [];
    this.chartData = [];
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
    this.lineChartLegend = true;
    this.lineChartOptions = {
      responsive: true,
    };
    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(0, 51, 255, 0.3)',
      },
    ];
  }

  public ngOnInit(): void {
    this.subscriptions.push( this.workoutService.getExercises()
      .subscribe((names) => {
        this.exerciseNames = names['data'];
      }),
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
      }));
  }

  public selectChange(value): void {
    if (value === "overall") return;

    let newLabels = [];

    this.subscriptions.push(this.workoutService.getExerciseHistory(value)
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
      }));
  }

  public formatDate(date: Date): string {
    return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
