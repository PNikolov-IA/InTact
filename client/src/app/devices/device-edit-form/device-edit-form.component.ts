import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../core/services/devices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceViewModel } from '../../core/models/view-models/device.model';

@Component({
  selector: 'app-device-edit-form',
  templateUrl: './device-edit-form.component.html',
  styleUrls: ['./device-edit-form.component.scss']
})
export class DeviceEditFormComponent implements OnInit {
  deviceForm: FormGroup;
  device: DeviceViewModel;

  constructor(
    private readonly devicesService: DevicesService,
    private readonly toastrService: ToastrService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.devicesService
        .getOne(params['id'])
        .subscribe((device: DeviceViewModel) => {
          this.device = device;
        }, () => {
          this.toastrService.error('Something went wrong!');
          this.router.navigate([`/devices/all`]);
        }, () => {
          this.deviceForm = this.formBuilder.group({
            name: [this.device.name, [Validators.required]],
            longitude: [this.device.longitude, [Validators.required]],
            latitude: [this.device.latitude, [Validators.required]]
          })
        })
    });
  }

  edit(id: string) {
    this.devicesService
      .edit(id, this.deviceForm.value)
      .subscribe(() => {
        this.toastrService.success('Device successfully edited!');
        this.router.navigate(['/devices/all']);
      }, () => {
        this.toastrService.error('Editing device failed!');
        this.router.navigate([`/devices/${id}/edit`]);
      });
  }

  cancel() {
    this.router.navigate(['/devices/all']);
  }
}
