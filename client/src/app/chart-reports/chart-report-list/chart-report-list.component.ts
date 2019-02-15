import { Component, OnInit} from '@angular/core';
import { ChartReportsService } from '../../core/services/chart-reports.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chart-report-list',
  templateUrl: './chart-report-list.component.html',
  styleUrls: ['./chart-report-list.component.scss']
})
export class ChartReportListComponent implements OnInit {
  chartDataXax: Array<any>;
  chartDataYax: Array<any>;
  chartSharedData;
  private cardTitle = 'Chart Reports';
  private buttonName = 'New Chart Report';
  private chartReportsData;
  private step = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private chartReportsService: ChartReportsService,
    private readonly router: Router,
    private toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.chartReportsData = data['apiData'];
    });
    this.chartDataXax = this.chartReportsData.chartDataXax;
    this.chartDataYax = this.chartReportsData.chartDataYax;
    this.chartSharedData = this.chartReportsData.chartReports;
  };

  deleteChartReport(chartReportId: string) {
    this.chartReportsService
      .deleteChartReport(chartReportId)
      .subscribe(
        () => {
          this.toastrService.success('Chart Report successfully deleted!');
          this.chartReportsData.chartReports.some((rep, i) => {
            if (rep.id === chartReportId) {
              this.chartReportsData.chartReports.splice(i, 1);
            }
          });
        }, () => {
          this.toastrService.error('Something went wrong!');
          this.router.navigate(['/chart-reports/all']);
        });
  };

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
}
