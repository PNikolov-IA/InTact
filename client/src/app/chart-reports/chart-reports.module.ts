import { NgModule } from '@angular/core';
import { ChartReportsCreateComponent } from './chart-reports-create/chart-reports-create.component';
import { ChartReportsEditComponent } from './chart-reports-edit/chart-reports-edit.component';
import { ChartReportsDisplayComponent } from './chart-reports-display/chart-reports-display.component';
import { SharedModule } from '../shared/shared.module';
import { ChartReportsRoutingModule } from './chart-reports-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  imports: [
    SharedModule,
    ChartReportsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule
  ],
  declarations: [
    ChartReportsCreateComponent,
    ChartReportsEditComponent,
    ChartReportsDisplayComponent
  ]
})
export class ChartReportsModule { }
