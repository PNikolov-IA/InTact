import { IsString, IsNumber } from 'class-validator';

export class CreateChartReportDTO {
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
