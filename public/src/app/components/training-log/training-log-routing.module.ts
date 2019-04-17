import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HistoryComponent } from './history/history.component';
import { GraphComponent } from './graph/graph.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { AddRoutineComponent } from './add-routine/add-routine.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'addExercise',
    component: AddExerciseComponent
  },
  {
    path: 'addRoutine',
    component: AddRoutineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingLogRoutingModule { }
