import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCreateFormComponent } from './device-create-form.component';

describe('DeviceFormComponent', () => {
  let component: DeviceCreateFormComponent;
  let fixture: ComponentFixture<DeviceCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
