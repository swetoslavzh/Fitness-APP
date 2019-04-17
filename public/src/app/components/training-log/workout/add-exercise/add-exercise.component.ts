import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/core/services/workout.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {

  exerciseForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    this.exerciseForm = this.fb.group({
      exerciseName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      group: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)] ]
    });
  }

  submitExercise() {
    const { exerciseName, group } = this.exerciseForm.value;
    this.workoutService.addExercise(exerciseName, group);
  }
}
