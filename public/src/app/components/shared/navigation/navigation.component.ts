import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
    private authService: AuthService
  ) { }

  public logout(): void {
    this.authService.logout();
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
