import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from 'src/app/core/services/routine.service';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.scss']
})
export class EditRoutineComponent implements OnInit {

  routine;

  constructor(
    private route: ActivatedRoute,
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.routineService.editRoutine(id)
      .subscribe((data) => {
        this.routine = data;
        console.log(this.routine);
      })
  }

}
