import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartReportsDTO } from '../models/input-models/chart-reports.dto';


@Injectable()
export class ChartReportsService {

    public constructor(
        private readonly httpClient: HttpClient,
    ) { }

    getChartReports(tableReportId: string): Observable<any> {
        return this.httpClient
            .get(
                `http://localhost:3000/table-reports/${tableReportId}/chart-reports`
            )
    }

    createChartReport(tableReportId: string, userData: ChartReportsDTO): Observable<any> {
        return this.httpClient
            .post(
                `http://localhost:3000/table-reports/${tableReportId}/chart-reports`,
                JSON.stringify(userData)
            )
    }

    editChartReport(tableReportId: string, chartReportId: string, userData: ChartReportsDTO): Observable<any> {
        return this.httpClient
            .put(
                `http://localhost:3000/table-reports/${tableReportId}/chart-reports/${chartReportId}`,
                JSON.stringify(userData)
            )
    }

    deleteChartReport(tableReportId: string, chartReportId: string): Observable<any> {
        return this.httpClient
            .delete(
                `http://localhost:3000/table-reports/${tableReportId}/chart-reports/${chartReportId}`
            );
    }
}
