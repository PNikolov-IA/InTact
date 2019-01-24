import { DevicesRoutingModule } from './devices-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
  imports: [
    SharedModule,
    DevicesRoutingModule,
  ],
  declarations: [
    DeviceListComponent
  ]
})
export class DevicesModule { }
