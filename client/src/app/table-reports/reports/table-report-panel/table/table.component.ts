import { ApiDataService } from './../../../../core/services/api-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { TableReportViewModel } from 'app/core/models/view-models/table-report.model';
import { MapService } from '../../../../core/services/map.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: any[];
  displayedColumns: string[];
  tableReportData;

  @Input()
  tableReport: TableReportViewModel;

  constructor(
    private readonly apiDataService: ApiDataService,
    private readonly mapService: MapService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.apiDataService
      .tableReportsData(this.tableReport)
      .subscribe(data => {
        this.tableReportData = data;
        this.displayedColumns = Object.keys(data);
        this.dataSource = Object.keys(data).map(key => data[key]);
      });
  }

  openDialog(originName, devices, value) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '275px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // const bestCase = dialogRef.componentInstance.dialogForm.value.bestCase;
      // const worstCase = dialogRef.componentInstance.dialogForm.value.worstCase;

      // const destinationName = this.getDestinationName(devices, value);

      // const origin = this.getDeviceByName(originName);
      // const destination = this.getDeviceByName(destinationName);

      // const coordinates = [[origin.latitude, origin.longitude], [destination.latitude, destination.longitude]];

      // const color = this.chooseColor(bestCase, worstCase, value);

      // this.mapService.changePolylineColor(coordinates, color);
    });

    return false;
  }

  setView(originName, devices, value) {
    const destinationName = this.getDestinationName(devices, value);

    const origin = this.getDeviceByName(originName);
    const destination = this.getDeviceByName(destinationName);

    const coordinates = [[origin.latitude, origin.longitude], [destination.latitude, destination.longitude]];

    this.mapService.setView(coordinates);
  }

  private getDestinationName(devices, value) {
    return Object.keys(devices).find(key => devices[key] === value);
  }

  private getDeviceByName(name) {
    return this.tableReport.devices.find(device => device.name === name);
  }

  private chooseColor(bestCase, worstCase, value) {
    if (value <= bestCase) {
      return 'green';
    } else if (bestCase < value && value < worstCase) {
      return 'orange';
    } else if (worstCase <= value) {
      return 'red';
    }
  }
}
