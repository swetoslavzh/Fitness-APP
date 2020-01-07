import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {

  public userRoutines;
  public sampleRoutines;
  public dialogRef;

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
