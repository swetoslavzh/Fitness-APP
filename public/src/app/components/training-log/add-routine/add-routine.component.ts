import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-routine',
  templateUrl: './add-routine.component.html',
  styleUrls: ['./add-routine.component.scss']
})
export class AddRoutineComponent implements OnInit {

  routineForm: FormGroup;
  exercises: FormArray;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.routineForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      exercises: this.fb.array([ this.createExercise() ])
    });

    this.exercises = this.routineForm.get('exercises') as FormArray;
  }

  createExercise(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  get exercisesFormGroup() {
    return this.routineForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exercises.push(this.createExercise());
  }

  removeExercise(index) {
    this.exercises.removeAt(index);
  }

  addRoutine(form) {
    console.log(form.value);
  }

}
