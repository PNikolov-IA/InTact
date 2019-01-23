import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [
    AuthService,
    StorageService,
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
          throw new Error('Core module is already provided!');
      }
  }
}
