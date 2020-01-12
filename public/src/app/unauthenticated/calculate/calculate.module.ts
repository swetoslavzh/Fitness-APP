import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OneRepMaxComponent } from './one-rep-max/one-rep-max.component';
import { CalorieComponent } from './calorie/calorie.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    CalorieComponent,
    OneRepMaxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CalculateModule { }
