import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartReportListComponent } from './chart-report-list/chart-report-list.component';
import { ChartReportsCreateComponent } from './chart-reports-create/chart-reports-create.component';
import { ChartReportsEditComponent } from './chart-reports-edit/chart-reports-edit.component';
import { ChartReportListResolver } from '../core/resolvers/chart-report-list.resolver';

const routes: Routes = [
    {
        path: 'all',
        component: ChartReportListComponent,
        resolve: { apiData: ChartReportListResolver },
    },
    {
        path: 'create',
        component: ChartReportsCreateComponent,
    },
    {
        path: ':id/edit',
        component: ChartReportsEditComponent,
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
export class ChartReportsRoutingModule { }
