import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  
  public ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, 
                    Validators.email] ],
      password: ['', [ Validators.required, 
                       Validators.minLength(4)] ]
    });
  }

  public login(): void {
    const user: User = this.loginForm.value;
    this.authService.login(user)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('name', data['user'].name);
        localStorage.setItem('isAdmin', data['user'].isAdmin);
        this.router.navigate(['/home']);
      });
  }
}
