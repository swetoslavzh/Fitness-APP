import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { MaterialModule } from './core/material.module';
import { AuthModule } from './components/auth/auth.module';
import { CalculateModule } from './components/calculate/calculate.module';
import { SharedModule } from './components/shared/shared.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ArticlesModule } from './components/articles/articles.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HomeComponent } from './components/home/home.component';
import { AppHttpInterceptorService } from './core/interceptors/app-http.interceptor';
import { ResponseHandlerInterceptorService } from './core/interceptors/response-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    CalculateModule,
    SharedModule,
    ArticlesModule,
    SlideshowModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseHandlerInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
