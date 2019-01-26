import { DeviceViewModel } from './../models/view-models/device.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceDTO } from '../models/input-models/device.dto';

@Injectable()
export class DevicesService {
    constructor(
        private readonly httpClient: HttpClient
    ) { }

    add(device: DeviceDTO): Observable<string> {
        return this.httpClient.post<string>('http://localhost:3000/devices', JSON.stringify(device));
    }

    all(): Observable<DeviceViewModel[]> {
        return this.httpClient.get<DeviceViewModel[]>('http://localhost:3000/devices');
    }

    getOne(id: string): Observable<DeviceViewModel> {
        return this.httpClient.get<DeviceViewModel>(`http://localhost:3000/devices/${id}`);
    }

    edit(id: string, device: DeviceViewModel): Observable<DeviceViewModel> {
        return this.httpClient.put<DeviceViewModel>(`http://localhost:3000/devices/${id}`, JSON.stringify(device));
    }

    delete(id: string) {
        return this.httpClient.delete(`http://localhost:3000/devices/${id}`);
    }
}
