import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableReportDTO } from '../models/input-models/table-report.dto';
import { TableReportViewModel } from '../models/view-models/table-report.model';
import { Observable } from 'rxjs';

@Injectable()
export class TableReportsService {
    constructor(
        private readonly httpClient: HttpClient
    ) { }

    add(tableReport: TableReportDTO) {
        return this.httpClient.post('http://localhost:3000/table-reports', JSON.stringify(tableReport));
    }

    all(): Observable<TableReportViewModel[]> {
        return this.httpClient.get<TableReportViewModel[]>('http://localhost:3000/table-reports');
    }

    getOne(id: string): Observable<TableReportDTO> {
        return this.httpClient.get<TableReportDTO>(`http://localhost:3000/table-reports/${id}`);
    }

    edit(id: string, tableReport: TableReportDTO): Observable<TableReportDTO> {
        return this.httpClient.put<TableReportDTO>(`http://localhost:3000/table-reports/${id}`, JSON.stringify(tableReport));
    }

    delete(id: string) {
        return this.httpClient.delete(`http://localhost:3000/table-reports/${id}`);
    }
}
