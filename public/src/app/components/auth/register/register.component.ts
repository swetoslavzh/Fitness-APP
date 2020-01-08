import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [ Validators.required, 
                   Validators.minLength(2)] ],
      email: ['', [ Validators.required, 
                    Validators.email] ],
      password: ['', [ Validators.required, 
                       Validators.minLength(4)] ]
    });
  }

  public register(): void {
    const { name, email, password } = this.registerForm.value;
    this.authService.register(name, email, password)
      .subscribe((_data) => {
        this.router.navigate(['/login']);
      });
  }

}
