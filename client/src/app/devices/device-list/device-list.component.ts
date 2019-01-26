import { DevicesService } from './../../core/services/devices.service';
import { Component, OnInit } from '@angular/core';
import { DeviceViewModel } from 'app/core/models/view-models/device.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: DeviceViewModel[]

  constructor(
    private readonly devicesService: DevicesService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.devicesService
      .all()
      .subscribe(data => {
        this.devices = data;
      })
  }

  delete(id: string) {
    this.devicesService
      .delete(id)
      .subscribe(() => {
        this.toastrService.success('Device successfully deleted!');
        this.router.navigate(['/devices/all']);
        this.devices = this.devices.filter(devices => devices.id !== id);
      }, () => {
        this.toastrService.success('Deleting device failed!');
        this.router.navigate(['/devices/all']);
      });
  }
}
