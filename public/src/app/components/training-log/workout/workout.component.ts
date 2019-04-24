import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { Workout } from '../../shared/models/workout.model';

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
  workout: Workout;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) { }

  ngOnInit() {
    let data = this.route.snapshot.data.routine;
    data.routine.map((el) => el.isCalled = false);
    this.workout = data;

    this.workoutForm = this.fb.group({
      exercise: this.fb.array([this.createExercicse()])
    });
  }
  
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
  
  submitWorkoutForm(workoutData) {
    let workoutName = this.workout.name;
    this.workoutService.postWorkout(workoutName, workoutData)
      .subscribe(() => {
        this.router.navigate(['/training-log']); 
      });
  }
}
