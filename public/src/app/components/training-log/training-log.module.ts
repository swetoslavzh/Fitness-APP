import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { GraphComponent } from './graph/graph.component';
import { HistoryComponent } from './history/history.component';
import { TrainingLogRoutingModule } from './training-log-routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { WorkoutComponent } from './workout/workout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyRoutinesComponent } from './workout/my-routines/my-routines.component';
import { SampleRoutinesComponent } from './workout/sample-routines/sample-routines.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { AddExerciseComponent } from './workout/add-exercise/add-exercise.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';

@NgModule({
  declarations: [
    OverviewComponent,
    GraphComponent,
    HistoryComponent,
    AddExerciseComponent,
    WorkoutComponent,
    MyRoutinesComponent,
    SampleRoutinesComponent,
    AddRoutineComponent,
    AddWorkoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TrainingLogRoutingModule,
    ReactiveFormsModule
  ]
})
export class TrainingLogModule { }
