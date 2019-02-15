import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'
import { ChartReportsService } from '../../../core/services/chart-reports.service';
import { ApiDataService } from '../../../core/services/api-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ChartDialogComponent } from './chart-dialog.component';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ]
})
export class ChartComponent implements OnInit {
  @ViewChild('base-chart') chart: BaseChartDirective;
  @Input() chartDataXax: Array<any>;
  @Input() chartDataYax: Array<any>;
  @Input() chartSharedData;
  public linearChartOptions = {};
  public linearChartLabels: string[];
  public linearChartType = 'line';
  public linearChartLegend = {};
  public linearChartData;
  private xax: any[] = [];
  private fill = 'true';
  private back = 'transparent';
  private isDataAvailable = false;
  public dateFormat = require('dateformat');
  private dialogRef;


  constructor(
    private chartReportsService: ChartReportsService,
    private apiDataService: ApiDataService,
    private readonly router: Router,
    private toastrService: ToastrService,
    private readonly route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog


  ) {

    if (this.chart !== undefined) {
      this.chart.ngOnDestroy();
      this.chart.labels = this.linearChartData;
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
      this.chart.chart = 0;
    }
  }
  ngOnInit() {
    this.linearChartOptions = {};
    this.linearChartLabels = [];
    this.linearChartType = 'line';
    this.linearChartLegend = {};
    this.linearChartData = [];

    setTimeout(() => {           // To load all data and to prevent missing data in canvas

      if (this.chartDataXax && this.chartDataYax) {
        this.isDataAvailable = true
      }

      this.linearChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        display: true,
        tooltips: {
          mode: 'index',
          axis: 'y'// 'point' mode: 'dataset'
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 60,
            boxHeight: 20,
            fontColor: 'black'
          }
        },
        scales: {
          xAxes: [
            {
              id: 'x-axis-1',
              display: true,
              position: 'bottom',
              gridLines: {
                offsetGridLines: true,
                backgroundColor: '#green',
              },
              ticks: {
                beginAtZero: false,
                callback: function (value, index, values) {
                  return value;
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Period of Time, hours',
                fontColor: '#546372'
              }
            }
          ],
          yAxes: [
            {
              id: 'y-axis-1',
              display: true,
              position: 'left',
              ticks: {
                beginAtZero: true,
                callback: function (value, index, values) {
                  return value;
                }
              },
              scaleLabel: {
                display: true,
                labelString: 'Travel Time, seconds',
                fontColor: '#546372'
              },
            }
          ]
        }
      }

      this.linearChartData = [
        {
          data: this.chartDataYax[0],
          label: new Date(this.chartDataXax[0][0]).toString().slice(4, 21),
          backgroundColor: this.back,
          fill: this.fill
        },
        {
          data: this.chartDataYax[1],
          label: new Date(this.chartDataXax[1][0]).toString().slice(4, 21),
          backgroundColor: this.back,
          fill: this.fill
        },
        {
          data: this.chartDataYax[2],
          label: new Date(this.chartDataXax[2][0]).toString().slice(4, 21),
          backgroundColor: this.back,
          fill: this.fill
        },
        {
          data: this.chartDataYax[3],
          label: new Date(this.chartDataXax[3][0]).toString().slice(4, 21),
          backgroundColor: this.back,
          fill: this.fill
        },
        {
          data: this.chartDataYax[4],
          label: new Date(this.chartDataXax[4][0]).toString().slice(4, 21),
          backgroundColor: this.back,
          fill: this.fill
        }
      ];

      const hours = [
        new Date(this.chartDataXax[0][0]).toString().slice(4, 21),
        new Date(this.chartDataXax[1][0]).toString().slice(4, 21)
      ];
      this.xax = [];
      this.chartDataXax[4].forEach((_, i) => {
        this.xax.push((i * 15) / 60);
      });

      this.linearChartLabels = this.xax; // this.chartDataXax[0];

      this.linearChartLegend = {
        display: true,
        position: 'left'
      };

    }, 800);   // setTimeOut
  }

  dateTransform(timeStamp): string {
    return this.dateFormat(new Date(timeStamp), 'ddd mmm dd yyyy HH:MM')
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(ChartDialogComponent, {
      data: {
        name: this.chartSharedData.name,
        period: +this.chartSharedData.periodInMilliseconds / (3600 * 1000),
        origin: this.chartSharedData.origin.name,
        destination: this.chartSharedData.destination.name,
        dates: [
          this.dateTransform(+this.chartSharedData.startDates[0].dateInMilliseconds).toString().substr(4, 21),
          this.dateTransform(+this.chartSharedData.startDates[1].dateInMilliseconds).toString().substr(4, 21),
          this.dateTransform(+this.chartSharedData.startDates[2].dateInMilliseconds).toString().substr(4, 21),
          this.dateTransform(+this.chartSharedData.startDates[3].dateInMilliseconds).toString().substr(4, 21),
          this.dateTransform(+this.chartSharedData.startDates[4].dateInMilliseconds).toString().substr(4, 21),
        ]
      },
      position: {
        top: '210px',
        right: '20px'
      }
    });
  }


  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  barChart(): string {
    return this.linearChartType = 'bar';
  }

  lineChart(): string {
    return this.linearChartType = 'line';
  }

  radarChart(): string {
    return this.linearChartType = 'radar';
  }

}
