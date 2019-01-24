import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsersListComponent, UsersCreateComponent]
})
export class UsersModule { }
