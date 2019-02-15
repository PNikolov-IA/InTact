import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [UsersListComponent, UsersCreateComponent, UsersEditComponent]
})
export class UsersModule { }
