import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AddExerciseComponent } from './routines/lib/add-exercise/add-exercise.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';
import { WorkoutComponent } from './workout/workout.component';
import { RoutinesResolver } from './routines/lib/routine/routines.resolver';;
import { WorkoutResolver } from './workout/workout.resolver';
import { ExerciseNamesResolver } from '../../shared/resolvers/exercise-names.resolver';
// import { EditRoutineComponent } from './edit-routine/edit-routine.component';

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
  // {
  //   path: 'editRoutine/:id',
  //   component: EditRoutineComponent,
  //   resolve: { exerciseNames: ExerciseNamesResolver }
  // },
  {
    path: 'addSampleRoutine',
    component: AddRoutineComponent,
    resolve: { exerciseNames: ExerciseNamesResolver }
  },
  {
    path: 'addSampleRoutine/:id',
    component: WorkoutComponent,
    resolve: { routine: WorkoutResolver }
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
