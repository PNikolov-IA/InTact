import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TableReportCreateFormComponent } from './table-report-create-form/table-report-create-form.component';
import { ReportsComponent } from './reports/reports.component';
import { TableReportEditFormComponent } from './table-report-edit-form/table-report-edit-form.component';

const routes: Routes = [
    {
        path: 'all',
        component: ReportsComponent,
    },
    {
        path: 'create',
        component: TableReportCreateFormComponent,
    },
    {
        path: ':id/edit',
        component: TableReportEditFormComponent,
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
export class TableReportsRoutingModule { }
