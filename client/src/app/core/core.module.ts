import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [

  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
          throw new Error('Core module is already provided!');
      }
  }
}
