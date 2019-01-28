import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartReportsDisplayComponent } from './chart-reports-display/chart-reports-display.component';
import { ChartReportsCreateComponent } from './chart-reports-create/chart-reports-create.component';
import { ChartReportsEditComponent } from './chart-reports-edit/chart-reports-edit.component';

const routes: Routes = [
    {
        path: 'display',
        component: ChartReportsDisplayComponent
    },
    {
        path: 'create',
        component: ChartReportsCreateComponent
    },
    {
        path: ':id/edit',
        component: ChartReportsEditComponent
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
export class ChartReportsRoutingModule { }
