import { UsersRetrieveService } from './services/users-retrieve.service';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UsersCreateService } from './services/users-create.service';

@NgModule({
  providers: [
    AuthService,
    StorageService,
    UsersCreateService,
    UsersRetrieveService
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
          throw new Error('Core module is already provided!');
      }
  }
}
