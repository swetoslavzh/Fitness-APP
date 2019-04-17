import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from 'src/app/core/services/routine.service';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.scss']
})
export class AddRoutineComponent implements OnInit {

  routineNameForm: FormGroup;
  exercisesForm: FormGroup;
  exercises: FormArray;
  isInputClicked: boolean = false;
  exerciseNames;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.routineNameForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.exercisesForm = this.fb.group({
      exercises: this.fb.array([ this.createExercise() ])
    });

    this.exercises = this.exercisesForm.get('exercises') as FormArray;
    this.exerciseNames = this.route.snapshot.data.exerciseNames.data;
  }

  createExercise(): FormGroup {
    return this.fb.group({
      exerciseName: ['', [Validators.required]]
    });
  }

  get exercisesFormGroup() {
    return this.exercisesForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.createExercise());
  }

  removeExercise(index) {
    this.exercises.removeAt(index);
  }

  addRoutine() {
    const name = this.routineNameForm.value.name;
    const exercises = this.exercisesForm.value.exercises;

    this.routineService.addRoutine(name, exercises)
      .subscribe(() => {
        this.router.navigate(['/training-log']);
      })
  }

}
