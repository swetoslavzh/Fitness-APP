import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/core/services/administration.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  userData$;
  displayedColumns: Array<string> = ["name", "role"];

  constructor(
    private administrationService: AdministrationService
  ) { }

  ngOnInit() {
    this.userData$ = this.administrationService.getAllUsers();
  }

  changeRole(id, value) {
    let roles = [value];
    this.administrationService.changeUserRole(id, roles)
      .subscribe((_data) => { });
  }
}
