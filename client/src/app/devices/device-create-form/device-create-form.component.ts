import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevicesService } from '../../core/services/devices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-create-form.component.html',
  styleUrls: ['./device-create-form.component.scss']
})
export class DeviceCreateFormComponent implements OnInit, OnDestroy {
  deviceForm: FormGroup;
  private subscription;

  constructor(
    private readonly devicesService: DevicesService,
    private readonly toastrService: ToastrService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.deviceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  add() {
    this.subscription = this.devicesService
      .add(this.deviceForm.value)
      .subscribe(() => {
        this.toastrService.success('The device is successfully added!');
        this.router.navigate(['/devices/all']);
      }, () => {
        this.toastrService.error('Adding device failed!');
        this.router.navigate(['/devices/add']);
      });
  }

  cancel() {
    this.router.navigate(['/devices/all']);
  }
}
