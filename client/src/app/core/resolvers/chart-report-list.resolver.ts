import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { ChartReportsService } from '../services/chart-reports.service';
import { ApiDataService } from '../services/api-data.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ChartReportListResolver implements Resolve<Object> {
    private chartReports;
    private chartDataXax = [];
    private chartDataYax = [];
    private chartReportsData = {
        chartReports: this.chartReports,
        chartDataXax: this.chartDataXax,
        chartDataYax: this.chartDataYax
    };
    private apiData: any[] = [];

    constructor(
        private chartReportsService: ChartReportsService,
        private apiDataService: ApiDataService,
        private readonly router: Router,
        private toastrService: ToastrService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.chartReportsService
            .getChartReports()
            .subscribe((data) => {
                this.chartReports = data;
                this.chartReportsData.chartReports = this.chartReports;
            },
                () => {
                    this.toastrService.error('Something went wrong!');
                    this.router.navigate([`chart-reports/all`]);
                },
                () => {
                    const dates: number[] = [];
                    this.chartReports.map((data) => {

                        data.startDates.map((date) => {
                            dates.push(+date.dateInMilliseconds);
                        });

                        this.apiDataService.chartReportData(
                            data.origin.name,
                            data.destination.name,
                            dates,
                            data.periodInMilliseconds
                        ).subscribe((travelTime) => {
                            this.apiData = [];
                            this.apiData.push(travelTime);
                            this.chartDataXax = [];
                            this.chartDataYax = [];
                            this.apiData.map((el) => {   // date
                                (Object as any).values(el).map((element, i) => {
                                    const arrX: number[] = [];
                                    const arrY: number[] = [];
                                    element.map(elem1 => {
                                        arrX.push(elem1.x);
                                        arrY.push(elem1.y);

                                    });
                                    this.chartDataXax.push(arrX);
                                    this.chartDataYax.push(arrY);
                                });
                                this.chartReportsData.chartDataXax.push(this.chartDataXax);
                                this.chartReportsData.chartDataYax.push(this.chartDataYax);
                            });
                        },
                            () => {
                                this.toastrService.error('Something went wrong!');
                                this.router.navigate(['/chart-reports/all']);
                            },
                            () => {
                            });
                    });
                });

        return this.chartReportsData;
    }
}
