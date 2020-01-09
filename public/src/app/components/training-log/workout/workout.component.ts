import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/core/services/workout.service';
import { Workout } from 'src/app/shared/models/workout.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {
  public workoutForm: FormGroup;
  public kgControls: FormArray;
  public repsControls: FormArray;
  public workout: Workout;
  public displayedColumns: string[];
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService
  ) {
    this.displayedColumns = ['position', 'name', 'weight', 'reps'];
  }

  public ngOnInit(): void {
    let data = this.route.snapshot.data.routine;
    data.routine.map((el) => el.isCalled = false);
    this.workout = data;

    this.workoutForm = this.fb.group({
      exercise: this.fb.array([this.createExercicse()])
    });
  }
  
  public createExercicse() {
    return this.fb.group({
      set: this.fb.array([this.createSet()])
    });
  }

  public createSet() {
    return this.fb.group({
      kg: ['', [Validators.required, Validators.min(0)]],
      reps: ['', [Validators.required, Validators.min(0)]]
    })
  }
  
  public submitWorkoutForm(workoutData): void {
    let workoutName = this.workout.name;
    this.subscription = this.workoutService.postWorkout(workoutName, workoutData)
      .subscribe(() => {
        this.router.navigate(['/training-log']); 
      });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
