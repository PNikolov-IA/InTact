import { DeviceListComponent } from './device-list/device-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeviceCreateFormComponent } from './device-create-form/device-create-form.component';
import { DeviceEditFormComponent } from './device-edit-form/device-edit-form.component';

const routes: Routes = [
    {
        path: 'all',
        component: DeviceListComponent,
    },
    {
        path: 'add',
        component: DeviceCreateFormComponent,
    },
    {
        path: ':id/edit',
        component: DeviceEditFormComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DevicesRoutingModule { }
