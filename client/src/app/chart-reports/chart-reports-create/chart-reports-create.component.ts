import { DevicesService } from './../../core/services/devices.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ChartReportsService } from '../../core/services/chart-reports.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChartReportDTO } from '../../core/models/input-models/chart-report.dto';
import { DeviceTableViewModel } from '../../core/models/view-models/device-table.model';

@Component({
  selector: 'app-chart-reports-create',
  templateUrl: './chart-reports-create.component.html',
  styleUrls: ['./chart-reports-create.component.scss']
})
export class ChartReportsCreateComponent implements OnInit {
    settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm',
    defaultOpen: false,
  };
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

  public createForm: FormGroup;
  public dateFormat = require('dateformat');

  private name = '';
  private periodInMilliseconds: number;
  private origin: string;
  private destination: string;
  private startDates: string[] = [];
  private startDatesInMilliseconds: number[] = [];
  private devices: DeviceTableViewModel[];

  private chartReportDTO: ChartReportDTO = {
    name: this.name,
    periodInMilliseconds: this.periodInMilliseconds,
    origin: this.origin,
    destination: this.destination,
    startDates: this.startDatesInMilliseconds
  };

  constructor(
    private chartReportsService: ChartReportsService,
    private devicesService: DevicesService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.devicesService
    .all()
    .subscribe((devices) => {
      this.devices = devices;
    })

    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      period: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      startDate: [new Date(), [Validators.required]],

    });
  }

  createChartReport() {
    this.chartReportDTO.name = this.createForm.value.name;
    this.chartReportDTO.periodInMilliseconds = this.createForm.value.period * 60000;
    this.chartReportDTO.origin = this.createForm.value.origin;
    this.chartReportDTO.destination = this.createForm.value.destination;
    this.chartReportsService
      .createChartReport(this.chartReportDTO)
      .subscribe(
        () => {
          this.toastrService.success('Successfully create Chart Report!');
          this.router.navigate(['/chart-reports/all']);
        },
        () => {
          this.toastrService.error('Something went wrong!');
          this.router.navigate(['/chart-reports/all']);
        });
  }

  addDate() {
    const startDate = new Date(this.createForm.value.startDate);
    const nowDateInMilliseconds = new Date().getTime()
    const formatStartDate = this.dateFormat(startDate, 'dd mm yyyy HH:MM');

    const currentDateInMilliseconds = startDate.getTime();
    const existDate: boolean = this.startDatesInMilliseconds.includes(currentDateInMilliseconds)

    if (currentDateInMilliseconds - 100 > nowDateInMilliseconds) {
      return this.toastrService.
        warning(`Choose date before current date ${new Date().toString().slice(4, 21)}`);
    }

    if (existDate) {
      return this.toastrService.warning('This date already exist');
    }

    if (this.startDates.length < 5) {
      this.startDates.push(formatStartDate);
      this.startDatesInMilliseconds.push(currentDateInMilliseconds);
    } else {
      this.toastrService.warning('Choose only five dates');
    }
  }

  deleteDate(date) {
    const index = this.startDates.indexOf(date)
    this.startDates.splice(index, 1);
    this.startDatesInMilliseconds.splice(index, 1);
  }
  cancel() {
    this.router.navigate(['/chart-reports/all']);
  }
}
