import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const jsonReq = req.clone({
      setHeaders: {
          Authorization: `Bearer ${token}`
      }
    }); 

    return next.handle(jsonReq);
  }
}
