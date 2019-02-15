import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './common/core/core.module';
import { DatabaseModule } from './database/database.module';
import { TableReportsModule } from './table-reports/table-reports.module';
import { DevicesModule } from './devices/devices.module';
import { ChartReportsModule } from './chart-reports/chart-reports.module';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    AuthModule,
    DatabaseModule,
    UsersModule,
    CoreModule,
    DatabaseModule,
    TableReportsModule,
    DevicesModule,
    ChartReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
