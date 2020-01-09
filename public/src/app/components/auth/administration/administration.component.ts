import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdministrationService } from 'src/app/core/services/administration.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnDestroy {
  public userData$: Observable<User[]>;
  public displayedColumns: string[];
  private subscription: Subscription;

  constructor(
    private administrationService: AdministrationService
  ) {
    this.displayedColumns = ["name", "role"];
    this.userData$ = this.administrationService.getAllUsers();
  }

  public changeRole(id, value): void {
    this.subscription = this.administrationService.changeUserRole(id, [value])
      .subscribe( (_data) => {} );
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
