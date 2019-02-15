import { TableReportsService } from 'app/core/services/table-report.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableReportDTO } from 'app/core/models/input-models/table-report.dto';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-report-edit-form',
  templateUrl: './table-report-edit-form.component.html',
  styleUrls: ['./table-report-edit-form.component.scss']
})
export class TableReportEditFormComponent implements OnInit {
  title = 'Edit Table Report'

  tableReportForm: FormGroup;
  tableReport: TableReportDTO;

  constructor(
    private readonly tableReportsService: TableReportsService,
    private readonly toastrService: ToastrService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableReportsService
        .getOne(params['id'])
        .subscribe(report => {
          this.tableReport = report;
        }, () => {
          this.toastrService.error('Something went wrong!');
          this.router.navigate([`/table-reports/all`]);
        }, () => {
          this.tableReportForm = this.formBuilder.group({
            name: [this.tableReport.name, [Validators.required]],
          })
        })
    });
  }

  edit(id: string) {
    this.tableReportsService
      .edit(id, this.tableReportForm.value)
      .subscribe(() => {
        this.toastrService.success('Table report successfully edited!');
        this.router.navigate(['/table-reports/all']);
      }, () => {
        this.toastrService.error('Editing table report failed!');
        this.router.navigate([`/table-reports/${id}/edit`]);
      });
  }

  cancel() {
    this.router.navigate(['/table-reports/all']);
  }
}
