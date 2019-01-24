import { UsersRetrieveService } from './../../core/services/users-retrieve.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private usersRetrieveService: UsersRetrieveService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  getUsers() {
    return this.usersRetrieveService
      .getUsers()
      .subscribe((data) => {
        console.log(data);
      });
  }

  redirectToCreateUsers() {
    this.router.navigate(['/users/create']);
  }
}
