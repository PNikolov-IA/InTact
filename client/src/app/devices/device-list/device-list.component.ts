import { DevicesService } from './../../core/services/devices.service';
import { Component, OnInit } from '@angular/core';
import { DeviceDTO } from 'app/core/models/view-models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: DeviceDTO[]

  constructor(
    private readonly devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.devicesService
      .all()
      .subscribe(data => {
        console.log(data);
      })
  }
}
