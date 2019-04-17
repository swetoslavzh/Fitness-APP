import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/services/auth.service';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { MaterialModule } from './core/material.module';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ResponseHandlerInterceptorService } from './core/interceptors/response-handler-interceptor.service';
import { AuthModule } from './components/auth/auth.module';
import { CalculateModule } from './components/calculate/calculate.module';
import { keyValueFilterPipe } from './components/shared/keyValueFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    keyValueFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    CalculateModule
  ],
  providers: [
    AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptorService,
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
