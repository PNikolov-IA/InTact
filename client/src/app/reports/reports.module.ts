import { NgModule } from '@angular/core';
import { ReportListComponent } from './report-list/report-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import {
  MatGridListModule, MatExpansionModule, MatIconModule, MatTableModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatListModule, MatAutocompleteModule
} from '@angular/material';
import { TableReportCreateFormComponent } from './table-report-create-form/table-report-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatAutocompleteModule
  ],
  declarations: [
    ReportListComponent,
    TableReportCreateFormComponent
  ]
})
export class ReportsModule { }
