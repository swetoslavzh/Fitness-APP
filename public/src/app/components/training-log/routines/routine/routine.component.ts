import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {

  @Input('routines') routines;
  @Input('type') type;

  panelOpenState: boolean = false;
  
  constructor() { }

  ngOnInit() {
    
  }

}
