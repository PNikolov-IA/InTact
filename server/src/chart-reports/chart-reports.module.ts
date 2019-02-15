import { ChartReport } from 'src/data/entities/chart-report.entity';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../common/core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, HttpModule } from '@nestjs/common';
import { ChartReportsController } from './chart-reports.controller';
import { ChartReportsService } from './chart-reports.service';
import { Device } from '../data/entities/device.entity';
import { StartDate } from '../data/entities/start-date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChartReport, Device, StartDate]), CoreModule, AuthModule, HttpModule],
  providers: [ChartReportsService],
  exports: [],
  controllers: [ChartReportsController],
})
export class ChartReportsModule { }
