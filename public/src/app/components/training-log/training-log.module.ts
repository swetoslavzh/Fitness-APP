import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { GraphComponent } from './graph/graph.component';
import { HistoryComponent } from './history/history.component';
import { TrainingLogRoutingModule } from './training-log-routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { RoutinesComponent } from './routines/routines.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { AddExerciseComponent } from './routines/add-exercise/add-exercise.component';
import { WorkoutComponent } from './workout/workout.component';
import { RoutineComponent } from './routines/routine/routine.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { CreateArrayPipe } from '../shared/createArray.pipe';

@NgModule({
  declarations: [
    OverviewComponent,
    GraphComponent,
    HistoryComponent,
    AddExerciseComponent,
    RoutinesComponent,
    AddRoutineComponent,
    WorkoutComponent,
    RoutineComponent,
    EditWorkoutComponent,
    CreateArrayPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TrainingLogRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TrainingLogModule { }
