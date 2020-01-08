import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/core/services/administration.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {

  public userData$: Observable<User[]>;
  public displayedColumns: string[];

  constructor(
    private administrationService: AdministrationService
  ) {
    this.displayedColumns = ["name", "role"];
    this.userData$ = this.administrationService.getAllUsers();
  }

  public changeRole(id, value): void {
    this.administrationService.changeUserRole(id, [value])
      .subscribe( (_data) => {} );
  }
}
