import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportsDisplayComponent } from './chart-reports-display.component';

describe('ChartReportsDisplayComponent', () => {
  let component: ChartReportsDisplayComponent;
  let fixture: ComponentFixture<ChartReportsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReportsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReportsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
