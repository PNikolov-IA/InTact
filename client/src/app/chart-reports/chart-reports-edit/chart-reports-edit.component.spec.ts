import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportsEditComponent } from './chart-reports-edit.component';

describe('ChartReportsEditComponent', () => {
  let component: ChartReportsEditComponent;
  let fixture: ComponentFixture<ChartReportsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReportsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
