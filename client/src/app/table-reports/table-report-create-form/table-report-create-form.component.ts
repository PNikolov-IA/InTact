import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DevicesService } from 'app/core/services/devices.service';
import { DeviceTableViewModel } from 'app/core/models/view-models/device-table.model';
import { TableReportsService } from 'app/core/services/table-report.service';

@Component({
  selector: 'app-table-report-create-form',
  templateUrl: './table-report-create-form.component.html',
  styleUrls: ['./table-report-create-form.component.scss']
})
export class TableReportCreateFormComponent implements OnInit {
  periods = [
    { option: '15 minutes', value: 15 },
    { option: '30 minutes', value: 30 },
    { option: '45 minutes', value: 45 },
    { option: '1 hour', value: 60 },
    { option: '2 hours', value: 120 },
    { option: '4 hours', value: 240 },
    { option: '8 hours', value: 480 },
    { option: '12 hours', value: 720 },
    { option: '24 hours', value: 1440 }
  ];

  devices: DeviceTableViewModel[];
  tableReportForm: FormGroup;
  deviceIds: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly devicesService: DevicesService,
    private readonly tableReportService: TableReportsService,
    private readonly toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.devicesService
      .all()
      .subscribe((devices) => {
        this.devices = devices;
      })

    this.deviceIds = new FormControl('');

    this.tableReportForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      period: ['', [Validators.required]],
      deviceIds: this.deviceIds,
      days: [{ value: '', disabled: true }],
      hours: [{ value: '', disabled: true }]
    })
  }

  create() {
    this.tableReportService
      .add(this.tableReportForm.value)
      .subscribe(() => {
        this.toastrService.success('Created successfully!');
        this.router.navigate(['/table-reports/all']);
      })
  }

  cancel() {
    this.router.navigate(['/table-reports/all']);
  }

  changeState(offset) {
    offset.checked ? this.tableReportForm.controls['days'].disable() :  this.tableReportForm.controls['days'].enable();
    offset.checked ? this.tableReportForm.controls['hours'].disable() : this.tableReportForm.controls['hours'].enable();
  }
}
