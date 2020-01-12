import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ArticlesModule } from './articles/articles.module';
import { CalculateModule } from './calculate/calculate.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ArticlesModule,
    CalculateModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SlideshowModule
  ]
})
export class UnauthenticatedModule { }
