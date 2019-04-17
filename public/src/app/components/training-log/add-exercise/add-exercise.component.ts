import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {

  exerciseForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.exerciseForm = this.fb.group({
      exerciseName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      group: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)] ]
    });
  }

  submitExercise() {

  }
}
