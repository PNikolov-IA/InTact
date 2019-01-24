import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'all',
        component: DeviceListComponent,
    },
    {
        path: 'add',
        component: DeviceFormComponent,
    }
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
