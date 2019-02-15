import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableReportViewModel } from '../models/view-models/table-report.model';

@Injectable()
export class ApiDataService {
    constructor(
        private readonly httpClient: HttpClient,
    ) { }

    tableReportsData(report: TableReportViewModel) {
        const devices: string = report.devices
            .map(device => device.name)
            .join(',')

        const period = `{"from": ${report.startDateInMilliseconds},"to": ${report.endDateInMilliseconds}}`;

        const url =
            `http://ec2-35-158-53-19.eu-central-1.compute.amazonaws.com:8080/api/travelTimeTableData?devices=` +
            devices +
            '&date=' +
            period;

        return this.httpClient.get(url);
    }

    chartReportData(originID, destinationID, startDates: number[], period: number) {
        if (startDates.length > 1) {
            startDates.join(',');
        }
        // tslint:disable-next-line:max-line-length
        const url = `http://ec2-35-158-53-19.eu-central-1.compute.amazonaws.com:8080/api/comparePeriods?originDeviceId=${originID}&destinationDeviceId=${destinationID}&startDates=${startDates}&periodLength=${period}`
        // const url = `http://ec2-35-158-53-19.eu-central-1.compute.amazonaws.com:8080/api/comparePeriods?originDeviceId=aa&destinationDeviceId=bb&startDates=1539180000000&periodLength=360000000`
        return this.httpClient.get(url);
    }
}
