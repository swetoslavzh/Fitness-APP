import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { OverviewComponent } from './overview/overview.component';
import { GraphComponent } from './graph/graph.component';
import { HistoryComponent } from './history/history.component';
import { RoutinesComponent } from './routines/routines.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { AddExerciseComponent } from './routines/lib/add-exercise/add-exercise.component';
import { WorkoutComponent } from './workout/workout.component';
import { RoutineComponent } from './routines/lib/routine/routine.component';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';
import { TrainingLogRoutingModule } from './training-log-routing.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    OverviewComponent,
    GraphComponent,
    HistoryComponent,
    AddExerciseComponent,
    RoutinesComponent,
    AddRoutineComponent,
    RoutineComponent,
    EditRoutineComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TrainingLogRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class TrainingLogModule { }
