import { ChartReport } from 'src/data/entities/chart-report.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChartReportDTO } from '../models/chart-report/create-chart-report.dto';
import { User } from '../data/entities/user.entity';
import { Device } from '../data/entities/device.entity';
import { StartDate } from '../data/entities/start-date.entity';
import { UpdateChartReportDTO } from '../models/chart-report/update-chart-report.dto';

@Injectable()
export class ChartReportsService {
    constructor(
        @InjectRepository(ChartReport)
        private readonly chartReportRepository: Repository<ChartReport>,
        @InjectRepository(Device)
        private readonly devicesRepository: Repository<Device>,
        @InjectRepository(StartDate)
        private readonly startDateRepository: Repository<StartDate>,
    ) { }

    async all(user: User): Promise<ChartReport[]> {
        return await this.chartReportRepository.find({ where: { user } });
    }

    async getOne(id, user: User): Promise<ChartReport> {
        const result = await this.chartReportRepository.find({ where: { user } });
        let chartReport: ChartReport;

        result.forEach(element => {
            if (element.id === id) {
                chartReport = element;
            }
        });

        return chartReport;
    }

    async create(chartReportDTO: CreateChartReportDTO, user: User): Promise<ChartReport> {
        const origin: Device = await this.devicesRepository.findOne(chartReportDTO.origin);
        const destination: Device = await this.devicesRepository.findOne(chartReportDTO.destination);

        const chartReport: ChartReport = new ChartReport();

        chartReport.name = chartReportDTO.name;
        chartReport.periodInMilliseconds = chartReportDTO.periodInMilliseconds;
        chartReport.origin = origin;
        chartReport.destination = destination;
        chartReport.user = user;

        const startDates: StartDate[] = [];

        chartReportDTO.startDates.forEach(date => {
            const startDate = new StartDate();
            startDate.dateInMilliseconds = date;
            startDates.push(startDate);
        });

        chartReport.startDates = startDates;

        this.startDateRepository.create([...startDates]);
        await this.startDateRepository.save([...startDates]);

        this.chartReportRepository.create(chartReport);
        return await this.chartReportRepository.save(chartReport);
    }

    async edit(chartReportId: string, chartReportDTO: UpdateChartReportDTO): Promise<ChartReport> {
        const chartToUpdate: ChartReport = await this.chartReportRepository.findOne({ where: { id: chartReportId } });
        const origin: Device = await this.devicesRepository.findOne(chartReportDTO.origin);
        const destination: Device = await this.devicesRepository.findOne(chartReportDTO.destination);

        if (!chartToUpdate) {
            throw new Error(`Chart not found!`);
        }

        let startDates: StartDate[];
        if (chartReportDTO.startDates.length) {
            startDates = await Promise.all(chartReportDTO.startDates.map(async (number) => {
                const dateFound: StartDate = await this.startDateRepository.findOne({ where: { dateInMilliseconds: number } });

                if (!dateFound) {
                    const newStartDate: StartDate = new StartDate();
                    newStartDate.dateInMilliseconds = number;
                    await this.startDateRepository.create(newStartDate);
                    return await this.startDateRepository.save(newStartDate);
                }

                return dateFound;
            }));
        }

        chartToUpdate.origin = origin;
        chartToUpdate.destination = destination;
        chartToUpdate.name = chartReportDTO.name;
        chartToUpdate.periodInMilliseconds = chartReportDTO.periodInMilliseconds;
        chartToUpdate.startDates = startDates;

        this.chartReportRepository.create(chartToUpdate);
        return await this.chartReportRepository.save(chartToUpdate);
    }

    async delete(id: string): Promise<string> {
        const chartToDelete: ChartReport = await this.chartReportRepository.findOne({ where: { id } });

        if (!chartToDelete) {
            throw new Error(`Chart not found!`);
        }

        await this.chartReportRepository.delete(id);

        return JSON.stringify(`Chart report with id "${id}" was successfully deleted.`);
    }
}