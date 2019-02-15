import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportListComponent } from './chart-report-list.component';

describe('ChartReportListComponent', () => {
  let component: ChartReportListComponent;
  let fixture: ComponentFixture<ChartReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
