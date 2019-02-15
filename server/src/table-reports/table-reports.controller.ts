import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards, Post, Request, Body, Put, Param, Delete } from '@nestjs/common';
import { TableReportsService } from './table-reports.service';
import { TableReport } from '../data/entities/table-report.entity';
import { CreateTableReportDTO } from '../models/table-report/create-table-report.dto';
import { UpdateTableReportDTO } from '../models/table-report/update-table-report.dto';

@Controller('table-reports')
export class TableReportsController {
  constructor(
    private readonly tableReportsService: TableReportsService,
  ) { }

  @Get()
  @UseGuards(AuthGuard())
  async allTableReports(@Request() req): Promise<TableReport[]> {
    return await this.tableReportsService.getTableReports(req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getOne(@Param('id') id): Promise<TableReport> {
    return this.tableReportsService.getOne(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Request() req, @Body() tableReportDTO: CreateTableReportDTO) {
    return await this.tableReportsService.createTableReport(tableReportDTO, req.user);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateTableById(@Request() req, @Param('id') tableReportId, @Body() updateTableReportDTO: UpdateTableReportDTO): Promise<string> {
    return await this.tableReportsService.updateTableById(req.user, tableReportId, updateTableReportDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteTableById(@Request() req, @Param('id') tableReportId): Promise<string> {
    return await this.tableReportsService.deleteTableById(req.user, tableReportId);
  }
}