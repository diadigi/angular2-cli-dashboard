import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  public lat: number = 51.5074;
  public lng: number = -0.118092;
  public zoom: number = 10;
  public markers: any[] = [
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

  public clickedMarker(label: string, index: number): void {
    console.log(`clicked the marker: ${label || index}`);
  }

  public mapClicked($event: any): void {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  public markerDragEnd(m: any, $event: any): void {
    console.log('dragEnd', m, $event);
  }
}
