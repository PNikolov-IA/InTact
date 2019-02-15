import { IsString, IsNumber } from 'class-validator';

export class UpdateChartReportDTO {
    @IsString()
    name: string;

    @IsNumber()
    periodInMilliseconds: number;

    @IsString()
    origin: string;

    @IsString()
    destination: string;

    startDates: number[];
}
