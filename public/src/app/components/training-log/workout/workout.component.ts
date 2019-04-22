import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/core/services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutForm: FormGroup;
  kgControls: FormArray;
  repsControls: FormArray;
  displayedColumns: Array<string> = ['position', 'name', 'weight', 'reps'];
  workout;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  // ngOnInit() {
  //   this.workout = this.route.snapshot.data.routine;
  //   console.log(this.workout);
  //   let exerciseGroups = [];

  //   // for (let exercise of this.workout.routine) {
  //   for (let i = 0; i < this.workout.routine.length; i++) {
  //     let exerciseFormGroup = new FormGroup({});
  //     let kg: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  //     let reps: FormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  //     exerciseFormGroup.addControl(`${i}`, kg);
  //     exerciseFormGroup.addControl(`${i}`, reps);
  //     exerciseGroups.push(exerciseFormGroup);
  //   }

  //   this.workoutForm = this.fb.group({
  //     exercises: this.fb.array(exerciseGroups)
  //   });
  // }

  ngOnInit() {
    // this.workout = this.route.snapshot.data.routine;
    let data = this.route.snapshot.data.routine;
    data.routine.map((el) => el.isCalled = false);
    this.workout = data;
    console.log(this.workout);

    this.workoutForm = this.fb.group({
      exercise: this.fb.array([this.createExercicse()])
    });
  }
  
  // createItem() {
  //   return this.fb.group({
  //     kg: ['', [Validators.required, Validators.min(0)]],
  //     reps: ['', [Validators.required, Validators.min(0)]]
  //   })
  // }

  createExercicse() {
    return this.fb.group({
      set: this.fb.array([this.createSet()])
    });
  }

  createSet() {
    return this.fb.group({
      kg: ['', [Validators.required, Validators.min(0)]],
      reps: ['', [Validators.required, Validators.min(0)]]
    })
  }

  addNext(el) {
    el.isCalled = true;
    console.log('addNext called');
    (this.workoutForm.controls['exercise'] as FormArray).push(this.createExercicse())
  }
  
  addSet(el) {
    console.log('addSet called');
    (this.workoutForm.controls['set'] as FormArray).push(this.createSet())
  }

  // submitWorkoutForm() {
  //   console.log(this.workoutForm);
  // }
  submitWorkoutForm(workoutData) {
    console.log(workoutData);
    let workoutName = this.workout.name;
    this.workoutService.postWorkout(workoutName, workoutData)
      .subscribe(() => {
        this.router.navigate(['/training-log']); 
      });
  }
}



function generateMaterialTable(data) {
  let matTable = [];

  for (let i = 0; i < data.routine.length; i++) {

    let exercise = data.routine[i];
    matTable.push({
      "name": exercise.exerciseName,
      "reps": []
    });

    for(let j = 0; j < exercise.sets; j++) {
      matTable[i].reps.push({"index": j});
    }
  }
  return matTable;
}
