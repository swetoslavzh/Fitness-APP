import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CalorieComponent } from './components/calculate/calorie/calorie.component';
import { OneRepMaxComponent } from './components/calculate/one-rep-max/one-rep-max.component';
import { ExerciseNamesResolver } from './core/resolvers/exercise-names.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'training-log',
    loadChildren: './components/training-log/training-log.module#TrainingLogModule'
  },
  {
    path: 'calculate/calories',
    component: CalorieComponent
  },
  {
    path: 'calculate/one-rep-max',
    component: OneRepMaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
