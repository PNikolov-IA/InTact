import { NgModule } from '@angular/core';
import { ChartReportListComponent } from './chart-report-list/chart-report-list.component';
import { SharedModule } from '../shared/shared.module';
import { ChartReportsRoutingModule } from './chart-reports-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ChartReportsCreateComponent } from './chart-reports-create/chart-reports-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule,
  MatTableModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogModule,
} from '@angular/material';
import { ChartComponent } from './chart-report-list/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChartReportsEditComponent } from './chart-reports-edit/chart-reports-edit.component';
import { ChartDialogComponent } from './chart-report-list/chart/chart-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    ChartReportsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    ChartsModule,
    ComponentsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,

    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  declarations: [
    ChartReportListComponent,
    ChartReportsCreateComponent,
    ChartReportsEditComponent,
    ChartComponent,
    ChartDialogComponent
  ],
  entryComponents: [
    ChartDialogComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]
})
export class ChartReportsModule { }
