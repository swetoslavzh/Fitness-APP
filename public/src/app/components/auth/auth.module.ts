import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule 
  ]
})
export class AuthModule { }
