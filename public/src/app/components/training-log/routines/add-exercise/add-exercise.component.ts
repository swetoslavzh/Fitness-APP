import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExerciseName } from 'src/app/shared/models/exerciseName.model';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {
  public exerciseForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    public dialogRef: MatDialogRef<AddExerciseComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  public ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      exerciseName: ['', [ Validators.required, 
                           Validators.minLength(5), 
                           Validators.maxLength(30)] ],
      group: ['', [ Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(10)] ]
    });
  }

  public submitExercise(): void {
    const { exerciseName, group } = this.exerciseForm.value;
    const exercise: ExerciseName = { name: exerciseName, group };
    this.workoutService.addExercise(exercise).subscribe((_) => {
      this.dialogRef.close();
    });
  }
}
