import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
