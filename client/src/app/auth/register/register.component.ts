import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  private subscription;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  register() {
    this.subscription = this.authService
      .register(this.registerForm.value)
      .subscribe(() => { }, () => {
        this.toastrService.error('Registration failed!');
        this.router.navigate(['/register']);
      }, () => {
        this.authService
          .login(this.registerForm.value)
          .subscribe(() => {
            this.toastrService.success('Registered successfully!');
            this.router.navigate(['/dashboard']);
          }, () => {
            this.toastrService.error('Logged in failed!');
            this.router.navigate(['/login']);
          });
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
