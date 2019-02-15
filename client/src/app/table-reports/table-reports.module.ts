import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TableReportsRoutingModule } from './table-reports-routing.module';
import {
  MatGridListModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatAutocompleteModule,
  MatFormFieldModule
} from '@angular/material';
import { TableReportCreateFormComponent } from './table-report-create-form/table-report-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { TableReportPanelComponent } from './reports/table-report-panel/table-report-panel.component';
import { TableComponent } from './reports/table-report-panel/table/table.component';
import { MapComponent } from './reports/map/map.component';
import { TableReportEditFormComponent } from './table-report-edit-form/table-report-edit-form.component';
import { DialogComponent } from './reports/table-report-panel/table/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    SharedModule,
    TableReportsRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ComponentsModule,
    MatDialogModule,
  ],
  declarations: [
    TableReportCreateFormComponent,
    ReportsComponent,
    TableReportPanelComponent,
    TableComponent,
    MapComponent,
    TableReportEditFormComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class TableReportsModule { }
