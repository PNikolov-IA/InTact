import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
