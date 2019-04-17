import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  @Output() addExerciseForm = new EventEmitter<void>(); 
  dialogRef;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddExerciseComponent, {
      width: '250px'
    });
  }
}
