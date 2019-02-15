import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartReportDTO } from '../models/input-models/chart-report.dto';


@Injectable()
export class ChartReportsService {

    public constructor(
        private readonly httpClient: HttpClient,
    ) { }

    getChartReports(): Observable<any> {
        return this.httpClient
            .get(
                `http://localhost:3000/chart-reports`
            )
    }

    getChartReport(chartReportId: string): Observable<any> {
        return this.httpClient
            .get(
                `http://localhost:3000/chart-reports/${chartReportId}`
            )
    }

    createChartReport(userData: ChartReportDTO): Observable<any> {
        return this.httpClient
            .post(
                `http://localhost:3000/chart-reports`,
                JSON.stringify(userData)
            )
    }

    editChartReport(chartReportId: string, userData: ChartReportDTO): Observable<any> {
        return this.httpClient
            .put(
                `http://localhost:3000/chart-reports/${chartReportId}`,
                JSON.stringify(userData)
            )
    }

    deleteChartReport(chartReportId: string): Observable<any> {
        return this.httpClient
            .delete(
                `http://localhost:3000/chart-reports/${chartReportId}`
            );
    }
}
