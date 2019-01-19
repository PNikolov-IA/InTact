import { Component, OnInit } from '@angular/core';
import { NotificatorService } from '../core/notificator.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private readonly notificator: NotificatorService
  ) { }

  ngOnInit() {
    this.notificator.success('Welcome to user details!');
  }

}
