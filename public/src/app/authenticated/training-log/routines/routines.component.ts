import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AddExerciseComponent } from './lib/add-exercise/add-exercise.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {

  public userRoutines: any;
  public sampleRoutines: any;
  public dialogRef: MatDialogRef<AddExerciseComponent>;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.userRoutines = this.route.snapshot.data.routines.userRoutines;
    this.sampleRoutines = this.route.snapshot.data.routines.sampleRoutines;
  }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(AddExerciseComponent, {
      width: '250px'
    });
  }
}
