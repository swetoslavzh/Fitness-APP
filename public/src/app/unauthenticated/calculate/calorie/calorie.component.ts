import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { exerciseLevel } from '../../../shared/constants';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent implements OnInit {

  public calorieForm: FormGroup;
  public dailyCalories: number;
  public losingFatCalories: number;
  public muscleGainCalories: number;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.calorieForm = this.fb.group({
      age: ['', [ Validators.required, Validators.min(1) ]],
      weight: ['', [ Validators.required, Validators.min(20) ]],
      weightUnit: ['', Validators.required],
      height: ['', [ Validators.required, Validators.min(20) ]],
      heightUnit: ['', Validators.required],
      gender: ['', Validators.required],
      exercise: ['', Validators.required]
    });
  }

  public calculate(): void {
    let { age, weight, weightUnit, height, heightUnit, gender, exercise } = this.calorieForm.value;

    if (weightUnit === "lbs") weight = weight / 2.2;
    if (heightUnit === "inches") height = height * 2.54;

    const bmr = this.calcBmr(gender, weight, height, age);
    this.dailyCalories = bmr * exerciseLevel[exercise];
    this.losingFatCalories = Math.round(this.dailyCalories - 500);
    this.muscleGainCalories = Math.round(this.dailyCalories + 500);
  }

  public calcBmr(gender, weight, height, age): number {
    let result = (gender === "men") 
      ? ( 66 + (13.7 * weight) + (5 * height) - (6.8 * age) ) 
      : ( 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age) );
    
    return Math.round(result);
  }
}
