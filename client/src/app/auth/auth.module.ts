import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
