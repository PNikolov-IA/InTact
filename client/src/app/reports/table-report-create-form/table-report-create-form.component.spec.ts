import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportCreateFormComponent } from './table-report-create-form.component';

describe('TableReportCreateFormComponent', () => {
  let component: TableReportCreateFormComponent;
  let fixture: ComponentFixture<TableReportCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReportCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReportCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
