import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceDTO } from '../models/view-models/device.model';

@Injectable()
export class DevicesService {
    constructor(
        private readonly httpClient: HttpClient
    ) { }

    all(): Observable<DeviceDTO[]> {
        return this.httpClient.get<DeviceDTO[]>('http://localhost:3000/devices');
    }
}
