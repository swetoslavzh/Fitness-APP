import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneRepMaxComponent } from './one-rep-max/one-rep-max.component';
import { CalorieComponent } from './calorie/calorie.component';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';

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
