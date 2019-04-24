import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const exerciseLevel = {
  "none": 1,
  "sedentary": 1.2,
  "light": 1.375,
  "moderate": 1.55,
  "hard": 1.725,
  "non-stop": 1.9
};

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent implements OnInit {

  calorieForm: FormGroup;
  dailyCalories: number;
  losingFatCalories: number;
  muscleGainCalories: number;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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

  calculate() {
    let { age, weight, weightUnit, height, heightUnit, gender, exercise } = this.calorieForm.value;

    if (weightUnit === "lbs") weight = weight / 2.2;
    if (heightUnit === "inches") height = height * 2.54;

    let bmr = this.calcBmr(gender, weight, height, age);
    this.dailyCalories = bmr * exerciseLevel[exercise];
    this.losingFatCalories = Math.round(this.dailyCalories - 500);
    this.muscleGainCalories = Math.round(this.dailyCalories + 500);
  }

  calcBmr(gender, weight, height, age): number {
    let result = (gender === "men") 
      ? ( 66 + (13.7 * weight) + (5 * height) - (6.8 * age) ) 
      : ( 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age) );
    
    return Math.round(result);
  }
}
