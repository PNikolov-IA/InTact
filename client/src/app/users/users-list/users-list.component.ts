import { UserDeleteDTO } from './../../core/models/input-models/user-delete.dto';
import { Component, OnInit } from '@angular/core';
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
    this.usersService
      .deleteUser(email)
      .subscribe(
        () => {
          this.toastrService.success('User successfully deleted!');
          this.refresh('/users/all')
        }, () => {
          this.toastrService.error('Something goes wrong!');
          this.refresh('/users/all');
        });
  };
}
