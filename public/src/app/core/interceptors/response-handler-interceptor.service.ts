import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => {
      
    }), catchError((err) => {
      this.snackBar.open(err.error.message, 'Undo', {
        duration: 4000,
      });
      throw err;
    }))
  }
}
