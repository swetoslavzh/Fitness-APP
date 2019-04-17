import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneRepMaxComponent } from './one-rep-max/one-rep-max.component';
import { CalorieComponent } from './calorie/calorie.component';

@NgModule({
  declarations: [
    CalorieComponent,
    OneRepMaxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculateModule { }
