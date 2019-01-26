import { UserDeleteDTO } from './../../core/models/input-models/user-delete.dto';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../core/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private users;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

  redirectToCreateUsers() {
    this.router.navigate(['/users/create']);
  }

  refresh(url: string) {
    this.router.navigate([url]);
    this.ngOnInit();
  }

  deleteUser(email: UserDeleteDTO) {
    if (window.confirm('Are sure you want to delete this User?')) {
      this.usersService
        .deleteUser(email)
        .subscribe(
          () => {
            this.toastrService.success('User successfully deleted!');
            this.users.some((user, i) => {
              if (user.email === email) {
                this.users.splice(i, 1);
              }
            });
          }, () => {
            this.toastrService.error('Something goes wrong!');
            this.router.navigate(['/users/all']);
          });
    }
  };
}
