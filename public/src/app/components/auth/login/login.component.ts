import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private subscripton: Subscription;
  
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
    this.subscripton = this.authService.login(user)
      .subscribe((data) => {
        this.authService.setLocalData(data);
        this.router.navigate(['/home']);
      });
  }

  public ngOnDestroy(): void {
    if (this.subscripton) this.subscripton.unsubscribe();
  }
}
