import { ChartReportsModule } from './chart-reports.module';

describe('ChartReportsModule', () => {
  let chartReportsModule: ChartReportsModule;

  beforeEach(() => {
    chartReportsModule = new ChartReportsModule();
  });

  it('should create an instance', () => {
    expect(chartReportsModule).toBeTruthy();
  });
});
