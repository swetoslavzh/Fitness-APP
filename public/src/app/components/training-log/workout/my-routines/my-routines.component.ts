import { Component, OnInit } from '@angular/core';
import { RoutineService } from 'src/app/core/services/routine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-routines',
  templateUrl: './my-routines.component.html',
  styleUrls: ['./my-routines.component.scss']
})
export class MyRoutinesComponent implements OnInit {

  routines$: Observable<any>;
  panelOpenState: boolean = false;

  constructor(
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.routines$ = this.routineService.getMyRoutines();
  }

}
