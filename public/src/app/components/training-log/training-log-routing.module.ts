import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HistoryComponent } from './history/history.component';
import { GraphComponent } from './graph/graph.component';
import { AddExerciseComponent } from './routines/add-exercise/add-exercise.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { ExerciseNamesResolver } from 'src/app/core/resolvers/exercise-names.resolver';
import { WorkoutComponent } from './workout/workout.component';
import { RoutinesResolver } from 'src/app/core/resolvers/routines.resolver';
import { WorkoutResolver } from 'src/app/core/resolvers/workout.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: OverviewComponent,
    resolve: { routines: RoutinesResolver }
  },
  {
    path: 'addExercise',
    component: AddExerciseComponent
  },
  {
    path: 'addRoutine',
    component: AddRoutineComponent,
    resolve: { exerciseNames: ExerciseNamesResolver }
  },
  {
    path: 'addWorkout/:id',
    component: WorkoutComponent,
    resolve: { routine: WorkoutResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingLogRoutingModule { }
