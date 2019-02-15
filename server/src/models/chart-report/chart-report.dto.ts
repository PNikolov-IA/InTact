import { IsString, IsNumber } from 'class-validator';

export class ChartReportDTO {
    @IsString()
    name: string;

    @IsNumber()
    periodInMilliseconds: number;

    startDates: number[];
}
