import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReportEditFormComponent } from './table-report-edit-form.component';

describe('TableReportEditFormComponent', () => {
  let component: TableReportEditFormComponent;
  let fixture: ComponentFixture<TableReportEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReportEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReportEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
