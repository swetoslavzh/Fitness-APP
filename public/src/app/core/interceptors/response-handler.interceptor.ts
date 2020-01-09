import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe( tap((success) => {
      if (success instanceof HttpResponse) {
        this.setToasterIfNeeded(success);
      }
    }), catchError(err => {
      if (err['error']) {
        this.snackBar.open(err.error.message, 'Undo', {
          duration: 4000,
        });
      }
      return throwError(err);
    }));
  }

  private setToasterIfNeeded(success) {
    const urlLastSegment = success.url.split('/').pop();
    let message: string = null;
    switch (urlLastSegment) {
      case 'login':
        message = `Hello ${success.body.user.name}!`;
        break;
      case 'changeRole':
        message = `Successfully changed user role`;
        break;
      case 'postWorkout':
      case 'addExercise':
        message = success['body'].message;
        break;
    }
  
    if (message) {
      this.snackBar.open(message, '', {
        duration: 4000
      });
    }
  }
}