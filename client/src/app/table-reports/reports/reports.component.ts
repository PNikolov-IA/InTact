import { Component, OnInit } from '@angular/core';
import { TableReportViewModel } from 'app/core/models/view-models/table-report.model';
import { TableReportsService } from 'app/core/services/table-report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  buttonName = 'New Table Report';
  title = 'Table Reports';
  tableReportName = 'First Table Report';
  tableReports: TableReportViewModel[];

  constructor(
    private readonly tableReportsService: TableReportsService
  ) { }

  ngOnInit() {
    this.tableReportsService
    .all()
    .subscribe(tableReports => {
      this.tableReports = tableReports;
    })
  }

  receiveReportId($event) {
    this.tableReports = this.tableReports.filter(report => report.id !== $event);
  }
}
