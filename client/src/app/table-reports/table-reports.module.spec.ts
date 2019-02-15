import { TableReportsModule } from './table-reports.module';

describe('TableReportsModule', () => {
  let tableReportsModule: TableReportsModule;

  beforeEach(() => {
    tableReportsModule = new TableReportsModule();
  });

  it('should create an instance', () => {
    expect(tableReportsModule).toBeTruthy();
  });
});
