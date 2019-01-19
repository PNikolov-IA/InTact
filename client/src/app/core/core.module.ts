import { NotificatorService } from './notificator.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RequesterService } from './requester.service';

@NgModule({
    providers: [
        NotificatorService,
        RequesterService,
    ]
})

export class CoreModule {
    public constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('Core module is already provided!');
        }
    }
}
