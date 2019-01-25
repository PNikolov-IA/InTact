import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  createForm: FormGroup;
  private subscription;


  constructor(
    private usersService: UsersService,
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

  refresh(url: string) {
    this.router.navigate([url]);
    this.ngOnInit();
  }

  editUser() {
    this.subscription = this.usersService
      .editUser(this.createForm.value)
      .subscribe(
        () => {
          this.toastrService.success('Created successfully!');
          this.refresh('/users/all');
        },
        () => {
          this.toastrService.error('Registration failed!');
          this.refresh('/users/all');
        });
  }

  cancel() {
    this.router.navigate(['/users/all']);
  }
}
