import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => {
      if (success instanceof HttpResponse) {
        const url = success.url;

        if (url.endsWith('login')) {
          this.snackBar.open(`Hello ${success.body.user.name}!`, '', {
            duration: 4000
          });
        }

        if (url.endsWith('changeRole')) {
          this.snackBar.open(`Successfully changed user role`, '', {
            duration: 4000
          });
        }

        if (url.endsWith('addExercise')) {
          this.snackBar.open(success['body'].message, '', {
            duration: 4000
          });
        }
        if (url.endsWith('postWorkout')) {
          this.snackBar.open(success['body'].message, '', {
            duration: 4000
          });
        }
      }
    }), catchError((err) => {
      this.snackBar.open(err.error.message, 'Undo', {
        duration: 4000,
      });
      throw err;
    }))
  }
}
