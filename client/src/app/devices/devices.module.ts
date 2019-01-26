import { DevicesRoutingModule } from './devices-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list/device-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceCreateFormComponent } from './device-create-form/device-create-form.component';
import { DeviceEditFormComponent } from './device-edit-form/device-edit-form.component';

@NgModule({
  imports: [
    SharedModule,
    DevicesRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DeviceListComponent,
    DeviceCreateFormComponent,
    DeviceEditFormComponent
  ]
})
export class DevicesModule { }
