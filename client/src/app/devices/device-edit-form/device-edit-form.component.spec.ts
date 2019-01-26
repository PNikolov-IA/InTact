import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEditFormComponent } from './device-edit-form.component';

describe('DeviceEditFormComponent', () => {
  let component: DeviceEditFormComponent;
  let fixture: ComponentFixture<DeviceEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
