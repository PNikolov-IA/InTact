import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserViewModel } from '../../core/models/view-models/user.model';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  editForm: FormGroup;
  user: UserViewModel;
  private subscription;


  constructor(
    private usersService: UsersService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usersService
        .getOneUser(params['id'])
        .subscribe((user: UserViewModel) => {
          this.user = user;
        }, () => {
          this.toastrService.error('Something goes wrong!');
          this.router.navigate([`/users/all`]);
        }, () => {
          this.editForm = this.formBuilder.group({
            FirstName: [this.user.FirstName, [Validators.required]],
            LastName: [this.user.LastName, [Validators.required]],
            email: [ {value: this.user.email, disabled: true}, [Validators.required]]
          })
        })
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  editUser(id: string) {
    this.subscription = this.usersService
      .editUser(id, this.editForm.value)
      .subscribe(
        () => {
          this.toastrService.success('Successfully edited User!');
          this.router.navigate(['/users/all']);
        },
        () => {
          this.toastrService.error('Editing failed!');
          this.router.navigate([`/users/${id}/edit`]);
        });
  }

  cancel() {
    this.router.navigate([`/users/all`]);
  }
}
