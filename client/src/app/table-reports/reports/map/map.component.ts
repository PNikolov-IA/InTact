import { MapService } from './../../../core/services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(
    private readonly mapService: MapService
  ) { }

  ngOnInit(): void {
    this.mapService.initializeMap();
  }
}
