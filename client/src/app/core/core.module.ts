import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DevicesService } from './services/devices.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AnonymousGuardService } from './guards/anonymous.guard';
import { AuthGuardService } from './guards/auth.guard';
import { RoleGuardService } from './guards/admin.guard';
import { UsersService } from './services/users.service';

@NgModule({
  providers: [
    AuthService,
    StorageService,
    UsersService,
    DevicesService,
    AnonymousGuardService,
    AuthGuardService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})

export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
          throw new Error('Core module is already provided!');
      }
  }
}
