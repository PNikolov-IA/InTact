import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  createForm: FormGroup;
  subscription;
  buttonName: 'Create';

  constructor(
    private usersService: UsersService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
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
    this.subscription = this.usersService
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
