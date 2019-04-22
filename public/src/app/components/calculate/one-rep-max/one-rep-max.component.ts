import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LiftWieght } from '../../shared/models/lift-weight.model';

@Component({
  selector: 'app-one-rep-max',
  templateUrl: './one-rep-max.component.html',
  styleUrls: ['./one-rep-max.component.scss']
})
export class OneRepMaxComponent implements OnInit {

  onerepmaxForm: FormGroup;
  displayedColumns: Array<string> = ['percentage', 'weight', 'reps'];
  selected = 'kg';
  oneRepMax: number;
  liftData: Array<LiftWieght> = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.onerepmaxForm = this.fb.group({
      lift: ['', [ Validators.required, Validators.minLength(1)] ],
      massunit: ['', Validators.required],
      sets: ['', [ Validators.required, Validators.minLength(1)] ]
    });
  }

  calculate() {
    const { lift, massunit, sets } = this.onerepmaxForm.value;
    this.selected = massunit;
    this.oneRepMax = this.oneRep(lift, sets);
    this.createTable();
  }

  oneRep(weight, reps): number {
    let result = (weight / (1.0278 - 0.0278 * reps ));
    return Math.round(result * 10) / 10;
  }

  createTable() {
    let percentageChange = 5;
    
    for (let i = 0; i < 11; i++ ) {

      let percentage = 100 - (percentageChange * i),
          weight = Math.round((this.oneRepMax * (percentage / 100)) * 10) / 10,
          reps = i + 1;

      this.liftData.push({
        percentage,
        weight,
        reps
      });
    }
  }
}
