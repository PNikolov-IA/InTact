import { DevicesRoutingModule } from './devices-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceFormComponent } from './device-form/device-form.component';

@NgModule({
  imports: [
    SharedModule,
    DevicesRoutingModule,
  ],
  declarations: [
    DeviceListComponent,
    DeviceFormComponent
  ]
})
export class DevicesModule { }
