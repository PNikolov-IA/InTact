import { NgModule, OnDestroy } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
    {
        path: 'all',
        component: UsersListComponent
    },
    {
        path: 'create',
        component: UsersCreateComponent
    },
    {
        path: 'edit',
        component: UsersEditComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class UsersRoutingModule { }
