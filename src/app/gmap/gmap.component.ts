import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  lat: number = 51.5074;
  lng: number = -0.118092;
  zoom: number = 10;
  markers: any[] = [
    {
      lat: 51.50036,
      lng: -0.121432,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.49924,
      lng: -0.13871,
      label: 'B',
      draggable: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: any, $event: any) {
    console.log('dragEnd', m, $event);
  }
}
