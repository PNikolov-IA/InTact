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
  editForm: FormGroup;
  private subscription;


  constructor(
    private usersService: UsersService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      email: ['dd'],
      password: ['ddd']
    })
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  editUser() {
    this.subscription = this.usersService
      .editUser(this.editForm.value)
      .subscribe(
        () => {
          this.toastrService.success('Successfully edited User!');
          this.router.navigate(['/users/all']);
        },
        () => {
          this.toastrService.error('Editing failed!');
          this.router.navigate(['/users/all']);
        });
  }

  cancel() {
    this.router.navigate(['/users/all']);
  }
}
