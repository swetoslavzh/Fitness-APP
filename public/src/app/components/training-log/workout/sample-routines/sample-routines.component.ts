import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutineService } from 'src/app/core/services/routine.service';

@Component({
  selector: 'app-sample-routines',
  templateUrl: './sample-routines.component.html',
  styleUrls: ['./sample-routines.component.scss']
})
export class SampleRoutinesComponent implements OnInit {

  routines$: Observable<any>;
  panelOpenState: boolean = false;

  constructor(
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.routines$ = this.routineService.getSampleRoutines();
  }

}
