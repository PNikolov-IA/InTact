import { Component, OnInit } from '@angular/core';
import { UsersCreateService } from '../../core/services/users-create.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  createForm: FormGroup;
  private subscription;

  constructor(
    private usersCreateService: UsersCreateService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createUser() {
    this.subscription = this.usersCreateService
      .createUser(this.createForm.value)
      .subscribe(
        () => {
          this.toastrService.success('Created successfully!');
          this.router.navigate(['/users/all']);
        },
        () => {
          this.toastrService.error('Registration failed!');
          this.router.navigate(['/users/all']);
        });
  }

  cancel() {
    this.router.navigate(['/users/all']);
  }
}
