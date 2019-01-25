import { DevicesService } from './../../core/services/devices.service';
import { Component, OnInit } from '@angular/core';
import { DeviceViewModel } from 'app/core/models/view-models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: DeviceViewModel[]

  constructor(
    private readonly devicesService: DevicesService
  ) { }

  ngOnInit() {
    this.devicesService
      .all()
      .subscribe(data => {
        this.devices = data;
        console.log(this.devices);
      })
  }
}
