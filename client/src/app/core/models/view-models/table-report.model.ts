import { DeviceViewModel } from './device.model';

export class TableReportViewModel {
    id: string;

    name: string;

    startDateInMilliseconds: string;

    endDateInMilliseconds: string;

    devices: DeviceViewModel[];
}
