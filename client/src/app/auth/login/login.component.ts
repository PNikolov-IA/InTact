import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private subscription;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login() {
    this.subscription = this.authService
      .login(this.loginForm.value)
      .subscribe(() => {
        this.toastrService.success('Logged in successfully!');
        this.router.navigate(['/dashboard']);
      },
      () => {
        this.toastrService.error('Login failed!');
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
