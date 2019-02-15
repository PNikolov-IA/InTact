import { ChartReportsService } from './chart-reports.service';
import { Controller, Get, UseGuards, Post, Put, Delete, Request, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChartReport } from '../data/entities/chart-report.entity';
import { CreateChartReportDTO } from '../models/chart-report/create-chart-report.dto';
import { UpdateChartReportDTO } from '../models/chart-report/update-chart-report.dto';

@Controller('chart-reports')
export class ChartReportsController {
  constructor(
    private readonly chartReportsService: ChartReportsService,
  ) { }

  @Get()
  @UseGuards(AuthGuard())
  async all(@Request() req): Promise<ChartReport[]> {
    return this.chartReportsService.all(req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getOne(@Param('id') chartReportId, @Request() req): Promise<ChartReport> {
    return this.chartReportsService.getOne(chartReportId, req.user);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Request() req, @Body() chartReportDTO: CreateChartReportDTO) {
    return await this.chartReportsService.create(chartReportDTO, req.user);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateChartById(@Param('id') chartReportId, @Body() chartReportDTO: UpdateChartReportDTO): Promise<ChartReport> {
    return await this.chartReportsService.edit(chartReportId, chartReportDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteChartById(@Param('id') id): Promise<string> {
    return await this.chartReportsService.delete(id);
  }
}