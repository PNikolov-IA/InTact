import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportListComponent } from './report-list/report-list.component';
import { TableReportCreateFormComponent } from './table-report-create-form/table-report-create-form.component';

const routes: Routes = [
    {
        path: 'all',
        component: ReportListComponent,
    },
    {
        path: 'add',
        component: TableReportCreateFormComponent,
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
export class ReportsRoutingModule { }
