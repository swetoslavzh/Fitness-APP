import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from 'src/app/core/services/routine.service';
import { ExerciseName } from '../../shared/models/exerciseName.model';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.scss']
})
export class AddRoutineComponent implements OnInit {

  routineNameForm: FormGroup;
  exercisesForm: FormGroup;
  exercises: FormArray;
  exerciseNames: Array<ExerciseName>;
  currentUrl: string;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routineService: RoutineService
  ) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
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
      exerciseName: ['', [Validators.required]],
      sets: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get exercisesFormGroup() {
    return this.exercisesForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.createExercise());
  }

  addRoutine() {
    const name = this.routineNameForm.value.name;
    const exercises = this.exercisesForm.value.exercises;

    this.routineService.addRoutine(name, exercises, this.currentUrl)
      .subscribe(() => {
        this.router.navigate(['/training-log']);
      });
  }
}
