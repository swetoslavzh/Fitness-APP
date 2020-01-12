import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { MaterialModule } from '../shared/material.module';
import { TrainingLogModule } from './training-log/training-log.module';

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthenticatedModule { }
