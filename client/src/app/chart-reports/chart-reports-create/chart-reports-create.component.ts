import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ChartReportsService } from '../../core/services/chart-reports.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDayCalendarConfig } from 'ng2-date-picker';
import { ITimeSelectConfig } from 'ng2-date-picker/time-select/time-select-config.model';

@Component({
  selector: 'app-chart-reports-create',
  templateUrl: './chart-reports-create.component.html',
  styleUrls: ['./chart-reports-create.component.scss']
})
export class ChartReportsCreateComponent implements OnInit {

  public createForm: FormGroup;
  private subscription;
  selectedDate: string;

  private chartReportDTO = {};
  private name: string;
  private periodInMilliseconds: number;
  private startDates: number[];

  public config = <ITimeSelectConfig> {
    locale: 'en',
    format: 'HH MM SS',
    showSeconds: true,
    timeSeparator: ':'
  }

  public dpDayPicker = <IDayCalendarConfig>{
    // locale: 'en',
    // format: 'DD MM YYYY HH MM',
    // monthFormat: 'MMMM, YYYY',
    // firstDayOfWeek: 'mo',
    // String: 'All',

    firstDayOfWeek: 'mo',
    monthFormat: 'MMM, YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    closeOnSelect: undefined,
    closeOnSelectDelay: 100,
    onOpenDelay: 0,
    weekDayFormat: 'ddd',
    appendTo: document.body,
    drops: 'down',
    opens: 'right',
    showNearMonthDays: true,
    showWeekNumbers: false,
    enableMonthSelector: true,
    format: 'YYYY/MM/DD HH:mm',
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'DD',
    monthBtnFormat: 'MMM',
    hours12Format: 'hh',
    hours24Format: 'HH',
    meridiemFormat: 'A',
    minutesFormat: 'mm',
    minutesInterval: 1,
    secondsFormat: 'ss',
    secondsInterval: 1,
    showSeconds: false,
    showTwentyFourHours: true,
    timeSeparator: ':',
    multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: false,
    locale: 'en',
    // min: '2017-08-29 15:50',
    // minTime: '2017-08-29 15:50'
  }

  constructor(
    private chartReportsService: ChartReportsService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
  ) { }


  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dateFrom: ['', [Validators.required]],
      dateTo: ['', [Validators.required]],
      datesToCompare: ['', [Validators.required]],
      hourFrom: ['', [Validators.required]],
      hourTo: ['', [Validators.required]],
      hourToCompare: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  validatorsChanged() {
    console.log(this.selectedDate);
  }

  toTimestamp(strDate) {
    const datum = Date.parse(strDate);
    return datum / 1000;
  }
  createChartReport() {
    console.log(this.createForm.value);

    this.subscription = this.chartReportsService
      .createChartReport('', this.createForm.value)
      .subscribe(
        () => {
          this.toastrService.success('Created successfully!');
          this.router.navigate(['/chart-reports/create']);
        },
        () => {
          this.toastrService.error('Registration failed!');
          this.router.navigate(['/chart-reports/create']);
        });
  }

  add() {
    const dateStr = this.createForm.value.datesToCompare;
    console.log(this.createForm.value.hourFrom);
    //console.log(this.selectedDate);
    // this.toTimestamp('02/13/2009 23:31:30')
    //const dateToAdd: number = this.toTimestamp(dateStr);
    //this.startDates.push(dateToAdd);
  }
  cancel() {
    this.router.navigate(['/chart-reports/display']);
  }

}
