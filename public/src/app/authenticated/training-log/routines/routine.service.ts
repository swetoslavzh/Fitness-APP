import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  constructor(private http: HttpClient) { }

  public getUserRoutines(): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.post(apiUrls.getRoutine, { token });
  }

  public getSampleRoutines(): Observable<any> {
    return this.http.get(apiUrls.sampleRoutines);
  }

  public editRoutine(routineId: string): Observable<any> {
    return this.http.post(apiUrls.editRoutine, { routineId });
  }

  public addRoutine(name: string, routine, currentUrl: string): Observable<any> {
    const token = localStorage.getItem('token');
    const urlLastSegment = currentUrl.split('/').pop();
    let url = (urlLastSegment === "addRoutine") 
      ? apiUrls.addRoutine 
      : apiUrls.sampleRoutines;
      
    return this.http.post(url, { name, routine, token })
  }

  public deleteRoutine(id: string): Observable<any> {
    return this.http.delete(`${apiUrls.deleteRoutine}/${id}`);
  }
}
