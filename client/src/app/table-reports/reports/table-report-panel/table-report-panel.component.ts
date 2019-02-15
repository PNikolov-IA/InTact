import { MapService } from './../../../core/services/map.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableReportViewModel } from 'app/core/models/view-models/table-report.model';
import { TableReportsService } from 'app/core/services/table-report.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-report-panel',
  templateUrl: './table-report-panel.component.html',
  styleUrls: ['./table-report-panel.component.scss']
})
export class TableReportPanelComponent implements OnInit {
  @Input()
  tableReportName: string;

  @Input()
  tableReport: TableReportViewModel;

  @Output()
  sendIdEvent = new EventEmitter<string>();

  constructor(
    private readonly mapService: MapService,
    private readonly tableReportsService: TableReportsService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  delete(id: string) {
    this.tableReportsService
      .delete(id)
      .subscribe(() => {
        this.toastrService.success('Table report successfully deleted!');
        this.router.navigate(['/table-reports/all']);
      }, () => {
        this.toastrService.error('Table report device failed!');
        this.router.navigate(['/table-reports/all']);
      }, () => {
        this.sendIdEvent.emit(this.tableReport.id);
      });
  }

  createMarkers() {
    this.mapService.createMarkers(this.tableReport.devices);
  }
}
