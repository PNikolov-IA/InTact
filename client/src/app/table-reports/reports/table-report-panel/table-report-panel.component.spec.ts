import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportPanelComponent } from './table-report-panel.component';

describe('TableReportPanelComponent', () => {
  let component: TableReportPanelComponent;
  let fixture: ComponentFixture<TableReportPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReportPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReportPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
