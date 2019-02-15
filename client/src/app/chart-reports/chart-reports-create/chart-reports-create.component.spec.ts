import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportsCreateComponent } from './chart-reports-create.component';

describe('ChartReportsCreateComponent', () => {
  let component: ChartReportsCreateComponent;
  let fixture: ComponentFixture<ChartReportsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReportsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReportsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
