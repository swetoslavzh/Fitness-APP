import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LiftWeight } from '../../shared/models/lift-weight.model';

@Component({
  selector: 'app-one-rep-max',
  templateUrl: './one-rep-max.component.html',
  styleUrls: ['./one-rep-max.component.scss']
})
export class OneRepMaxComponent implements OnInit {

  public onerepmaxForm: FormGroup;
  public displayedColumns: string[];
  public selected: string;
  public oneRepMax: number;
  public liftData: LiftWeight[];

  constructor(
    private fb: FormBuilder
  ) {
    this.displayedColumns = ['percentage', 'weight', 'reps'];
    this.selected = 'kg';
    this.liftData = [];
  }

  public ngOnInit(): void {
    this.onerepmaxForm = this.fb.group({
      lift: ['', [Validators.required, Validators.min(1)] ],
      massunit: ['', Validators.required],
      reps: ['', [Validators.required, Validators.min(1)] ]
    });
  }

  public calculate(): void {
    const { lift, massunit, reps } = this.onerepmaxForm.value;
    this.selected = massunit;
    this.oneRepMax = this.oneRep(lift, reps);
    this.createTable();
  }

  public oneRep(weight, reps): number {
    const result = (weight / (1.0278 - 0.0278 * reps ));
    return Math.round(result * 10) / 10;
  }

  public createTable(): void {
    const percentageChange = 5;
    if (this.liftData.length > 0) this.liftData = [];
    
    for (let i = 0; i < 11; i++ ) {
      const percentage = 100 - (percentageChange * i),
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
