import * as L from 'leaflet';
import { Icon, icon, Marker } from 'leaflet';
import { DeviceViewModel } from '../models/view-models/device.model';

export class MapService {
    map;
    markers;
    polyline;
    codeNinjaMarker;
    coordinates;

    defaultIcon: Icon = icon({
        iconUrl: '../../../assets/img/device.png',
        iconAnchor: [18, 40],
        popupAnchor: [8, -32]
    });

    initializeMap() {
        Marker.prototype.options.icon = this.defaultIcon;

        this.map = L
            .map('map')
            .setView(new L.LatLng(42.65050, 23.37966), 16, { animation: true });

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution:
                `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
                <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ©
                <a href="https://www.mapbox.com/">Mapbox</a>`,
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWFyaWFkaW5ldmEiLCJhIjoiY2pyaGlxd3gyMDhrNjN5cDFqOXJvOHlkbiJ9.SBA1G7WTIJk8rAj91qL_-Q'
        }).addTo(this.map);

        const codeNinja = L.icon({
            iconUrl: '../../../assets/img/CodeNinja.png',
        });

        this.codeNinjaMarker = L.marker([42.65115, 23.37886], { icon: codeNinja }).addTo(this.map);
    }

    createMarkers(devices: DeviceViewModel[]) {
        this.map.removeLayer(this.codeNinjaMarker);

        if (this.markers) {
            this.removeMarkers(this.markers);
            this.removePolyline();
        }

        this.markers = [];

        devices.forEach(device => {
            this.markers.push(L.marker([device.latitude, device.longitude])
                .bindPopup(`Device: ${device.name}<br> Latitude: ${device.latitude}<br> Longitude: ${device.longitude}`)
                .addTo(this.map));
        })

        this.coordinates = devices.map(device => [device.latitude, device.longitude]);

        this.setView(this.coordinates);

        this.createPolyline(this.coordinates);
    }

    setView(coordinates) {
        this.map.fitBounds(coordinates);
    }

    // changePolylineColor(coordinates, color) {
    //     this.removePolyline();

    //     this.createPolyline(coordinates, color);
    // }

    private removeMarkers(markers) {
        markers.forEach(marker => this.map.removeLayer(marker));
    }

    private createPolyline(coordinates, color = 'blue') {
        this.polyline = new L.Polyline(coordinates, {
            color: color,
            weight: 10,
            opacity: 0.5,
            smoothFactor: 1
        });

        this.polyline.addTo(this.map);
    }

    private removePolyline() {
        this.map.removeLayer(this.polyline)
    }
}
